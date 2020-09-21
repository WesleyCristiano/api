import IProductRepository from "../IProductRepository";
import Product from "@modules/products/infra/typeorm/entities/Product";
import ICreateProductDTO from '@modules/products/dtos/ICreateProductDTO'
import Category from "@modules/categories/infra/typeorm/entities/Category";
import {uuid } from "uuidv4";
import IFindByNameAndStoreIdDTO from "@modules/products/dtos/IFindByNameAndStoreIdDTO";


class FakeProductRepository implements IProductRepository{
    private products: Product[] = []

    public async create({store_id, name, description, quantity, price, categories }: ICreateProductDTO ): Promise<Product>{

        const productCategories = categories.map(category => {
            const productCategory = new Category()
            productCategory.id = uuid()
            productCategory.name = category.name
            productCategory.created_at = new Date()
            productCategory.updated_at = new Date()
            return productCategory
        })

        const product = new Product()
        product.id = uuid()
        product.store_id = store_id
        product.name = name
        if(description) product.description = description
        product.quantity = quantity
        product.price = price
        product.categories = productCategories
        product.created_at = new Date()
        product.updated_at = new Date()

        this.products.push(product)
        return product

    }

    public async findByNameAndByStoreId({name, store_id}:IFindByNameAndStoreIdDTO): Promise<Product | undefined>{
        const product = this.products.find(product => product.name === name && product.store_id === store_id)
        return product
    }

    public async findByCategories(categories: string[]): Promise<Product[]>{
        const prods: Product[] = []

        this.products.forEach(product=> 
            product.categories.forEach(category=>
                {
                    if(categories.includes(category.name) && !prods.includes(product)){
                        prods.push(product)
                    }
                }
            ))
        return prods

    }

    public async findOne(product_id:string): Promise<Product | undefined>{
        const product = this.products.find(product=>product.id === product_id)
        return product
    }
    public async save(product: Product): Promise<Product>{
        const findIndex = this.products.findIndex(prod=> product.id === prod.id)
        this.products[findIndex] = product
        return product    
    }
}
export default FakeProductRepository