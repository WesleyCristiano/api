import { Repository, getRepository } from "typeorm";
import IItemRepository from "@modules/items/repositories/IItemRepository";
import Item from "../entities/Item";
import ICreateItemDTO from "@modules/items/dtos/ICreateItemDTO";

class ItemRepository implements IItemRepository{

    private ormRepository: Repository<Item>
    constructor(){
        this.ormRepository = getRepository(Item)
    }
    public async create({order_number,description,categories}:ICreateItemDTO): Promise<Item>{        
        const item = this.ormRepository.create({
            order_number,
            description,
            categories
        })
        await this.ormRepository.save(item)
        return item
    }

    public createWidthPromise({order_number, description, categories}: ICreateItemDTO): Item{
        const item = this.ormRepository.create({
            order_number,
            description,
            categories
        })
        return item
    }

    
}

export default ItemRepository