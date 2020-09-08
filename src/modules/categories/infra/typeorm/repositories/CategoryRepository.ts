import ICategoryRepository from "@modules/categories/repositories/ICategoryRepository";
import { Repository, getRepository, Any } from "typeorm";
import Category from "../entities/Category";
import ICreateCategoryDTO from "@modules/categories/dtos/ICreateCategoryDTO";


class CategoryRepository implements ICategoryRepository{

    private ormRepository: Repository<Category>

    constructor(){
        this.ormRepository = getRepository(Category)
    }

    public async create({name}: ICreateCategoryDTO): Promise<Category>{
        const category = this.ormRepository.create({name})
        await this.ormRepository.save(category)
        return category;
    }

    public async findByName(name: string): Promise<Category | undefined>{
        const category = await this.ormRepository.findOne({
            where: {name}
        })
        return category
    }
    
    public async findAllByNames(names: string[]): Promise<Category[]>{
        const categories = await this.ormRepository.find({
            where: {
                name: Any(names)
            }
        })
        

        return categories
    }
}

export default CategoryRepository