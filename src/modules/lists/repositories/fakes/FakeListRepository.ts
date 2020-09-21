import IListRepository from "../IListRepository";
import ICreateListDTO from "@modules/lists/dtos/ICreateListDTO";
import List from "@modules/lists/infra/typeorm/entities/List";
import Item from "@modules/items/infra/typeorm/entities/Item";
import { uuid } from "uuidv4";
import FakeCategoryRepository from '@modules/categories/repositories/fakes/FakeCategoryRepository'
import Category from "@modules/categories/infra/typeorm/entities/Category";
import IFindListDTO from "@modules/lists/dtos/IFindListDTO";

class FakeListRepository implements IListRepository{

    fakeCategoryRepository = new FakeCategoryRepository()
    private lists: List[] = []

    public async create({school_id, grade_name, items}:ICreateListDTO): Promise<List>{
        const cat = new Category()
    

        // let itemsOfList = items.map((i)=>{
        //     const item = new Item()
        //     item.list_id = uuid()
        //     item.order_number = i.order_number
        //     item.description = i.description
        //     item.categories = i.categories.map(cat=>{
        //         const category = new Category()
        //         category.name = cat.name
        //         return category
        //     })
           
        //     return item
        // })

        const list = new List()
        list.id = uuid()
        list.school_id = school_id;
        list.grade_name = grade_name;
        list.items = items


        this.lists.push(list)

        return list

    }

    public async findList({school_id, grade_name}:IFindListDTO): Promise<List|undefined>{
        const list = this.lists.find(list=>
            list.school_id === school_id && list.grade_name === grade_name)
        return list
    }
    public async findBySchool(school_id: string): Promise<List[]>{
        const lists = this.lists.filter(list=> list.school_id === school_id)
        return lists
    }
}

export default FakeListRepository