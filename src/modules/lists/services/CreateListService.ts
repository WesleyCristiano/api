import List from "../infra/typeorm/entities/List"
import { injectable, inject } from "tsyringe"
import IListRepository from "../repositories/IListRepository"
import ICategoryRepository from "@modules/categories/repositories/ICategoryRepository"
import IItemRepository from "@modules/items/repositories/IItemRepository"
import ISchoolRepository from "@modules/schools/repositories/ISchoolRepository"
import AppError from "@shared/erros/AppError"

interface ItemRequest{
    order_number: number;
    description: string;
    categories: string[]
}

interface IRequest{
    school_id: string;
    grade_name: string;
    items: ItemRequest[]
}

@injectable()
class CreateListService{

    constructor(
        @inject('ListRepository')
        private listRepository: IListRepository,
        @inject('ItemRepository')
        private itemRepository: IItemRepository,
        @inject('CategoryRepository')
        private categoryRepository: ICategoryRepository,
        @inject('SchoolRepository')
        private schoolRepository: ISchoolRepository

    ){}

    public async execute({school_id,grade_name, items}: IRequest): Promise<List>{

        const school = await this.schoolRepository.findById(school_id)

        if(!school){
            throw new AppError('This school does not exists')
        }

        const listAlreadyExists = await this.listRepository.findList({school_id, grade_name})

        if(listAlreadyExists){
            throw new AppError('Already exists an list to this grade in this school')
        }

        const itemsOfList = await Promise.all(items.map(async(item)=>{
            return await this.itemRepository.create({
                order_number: item.order_number,
                description: item.description,
                categories: await Promise.all (item.categories.map(async (cat)=>{
                    return  this.categoryRepository.create({
                        name: cat
                    })
            }))
          }) 
        }))

        const list = await this.listRepository.create({
            school_id,
            grade_name,
            items: itemsOfList

        })

        return list
    }
    
}

export default CreateListService