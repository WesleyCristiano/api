import { injectable, inject } from "tsyringe";
import AppError from "@shared/erros/AppError";
import ICategoryRepository from "@modules/categories/repositories/ICategoryRepository";
import IProductRepository from "../repositories/IProductRepository";
import Product from "../infra/typeorm/entities/Product";

interface IRequest{
    name: string;
    store_id: string;
    description?:string;
    quantity: number;
    price: number;
    categories: string[]
}

@injectable()
class CreateProductService{

    constructor(
        @inject('CategoryRepository')
        private categoryRepository: ICategoryRepository,
        @inject('ProductRepository')
        private productRepository: IProductRepository
    ){}

    public async execute({
        name, store_id, description, quantity, price, categories
    }:IRequest): Promise<Product>{

        const productWithSameNameAndStore = await this.productRepository.findByNameAndByStoreId({
            name,
            store_id
        })

        if(productWithSameNameAndStore){
            throw new AppError('You already own an product with this name')
        }
    
        const productCategories = await this.categoryRepository.findAllByNames(categories)

        if(productCategories.length < 1){
            throw new AppError('the product must have at least one category')
        }

        const product = await this.productRepository.create({
            name, 
            store_id, 
            description, 
            quantity,price, 
            categories: productCategories
            })
        return product

    }
}

export default CreateProductService