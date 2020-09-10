import IListRepository from "../IListRepository";
import ICreateListDTO from "@modules/lists/dtos/ICreateListDTO";
import List from "@modules/lists/infra/typeorm/entities/List";
import Item from "@modules/items/infra/typeorm/entities/Item";
import { uuid } from "uuidv4";
import FakeCategoryRepository from '@modules/categories/repositories/fakes/FakeCategoryRepository'
import Category from "@modules/categories/infra/typeorm/entities/Category";

class FakeListRepository implements IListRepository{

    fakeCategoryRepository = new FakeCategoryRepository()
    private lists: List[] = []

    public async create({school_id, grade_name, items}:ICreateListDTO): Promise<List>{
        const cat = new Category()
    

        let itemsOfList = items.map((i)=>{
            const item = new Item()
            item.id = uuid()
            item.order_number = i.order_number
            item.description = i.description
            item.categories = i.categories.map(cat=>{
                const category = new Category()
                category.name = cat.name
                return category
            })
           
            return item
        })

        const list = new List()
        list.id = uuid()
        list.school_id = school_id;
        list.grade_name = grade_name;
        list.items = itemsOfList


        this.lists.push(list)

        return list

    }
}

export default FakeListRepository