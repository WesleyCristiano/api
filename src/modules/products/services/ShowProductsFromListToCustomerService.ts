import { injectable, inject } from "tsyringe";
import ICategoryRepository from "@modules/categories/repositories/ICategoryRepository";
import IProductRepository from "../repositories/IProductRepository";
import Product from "../infra/typeorm/entities/Product";
import IShowProductsFromList from "../dtos/IShowListOfProductsToCustomerDTO";
import IItemRepository from "@modules/items/repositories/IItemRepository";
import {byOrderNumber} from '@shared/util/sort'

interface IResponse{
    order_number: number;
    products: Product[]
}


@injectable()
class ShowProductsFromListToCustomerService{

    constructor(
        @inject('ItemRepository')
        private itemRepository: IItemRepository,
        @inject('ProductRepository')
        private productRepository: IProductRepository
    ){}

    public async execute({list_id}:IShowProductsFromList): Promise<IResponse[]>{

        const items = await this.itemRepository.findByListId(list_id)    
            
        const itemsParsed = items.map(async(item)=> {
            return {
                order_number: item.order_number,
                products: await this.productRepository.findByCategories(item.categories.map(category=>category.name))
             }
        })
        const list = await Promise.all(itemsParsed)
        const ordenedProducts = list.sort(byOrderNumber)
        return ordenedProducts
    }
}

export default ShowProductsFromListToCustomerService