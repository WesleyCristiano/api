import Item from "@modules/items/infra/typeorm/entities/Item"
import ICreateItemDTO from "@modules/items/dtos/ICreateItemDTO"
import { uuid } from "uuidv4";
import Category from "@modules/categories/infra/typeorm/entities/Category";
import IItemRepository from "../IItemRepository";

class FakeItemRepository implements IItemRepository{

    private items: Item[] = []

    public async create({order_number,description,categories}: ICreateItemDTO): Promise<Item>{
        const item = new Item()
        item.order_number = order_number;
        item.description = description;
        item.id = uuid()
        item.categories = categories
        
        return item
    }

    public createWidthPromise({order_number,description,categories}: ICreateItemDTO): Item{
        const item = new Item()
        item.order_number = order_number;
        item.description = description;
        item.id = uuid()
        item.categories = categories
        
        return item
    }

    
}

export default FakeItemRepository