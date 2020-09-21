import Item from "@modules/items/infra/typeorm/entities/Item"
import ICreateItemDTO from "@modules/items/dtos/ICreateItemDTO"
import { uuid } from "uuidv4";
import IItemRepository from "../IItemRepository";

class FakeItemRepository implements IItemRepository{

    private items: Item[] = []

    public async create({order_number,description,categories}: ICreateItemDTO): Promise<Item>{
        const item = new Item()
        item.order_number = order_number;
        item.description = description;
        item.id = uuid()
        item.list_id = uuid()
        item.categories = categories
        
        this.items.push(item)
        return item
    }

    public async findByListId(list_id: string): Promise<Item[]>{
        const items = this.items.filter(item=> item.list_id === list_id)        
        return items
    }
    

    
}

export default FakeItemRepository