import ICreateProductDTO from "../dtos/ICreateProductDTO";
import Product from "../infra/typeorm/entities/Product";
import IFindByNameAndStoreIdDTO from "../dtos/IFindByNameAndStoreIdDTO";
import Category from "@modules/categories/infra/typeorm/entities/Category";


export default interface IProductRepository{
    create(data:ICreateProductDTO): Promise<Product>
    findByNameAndByStoreId( data: IFindByNameAndStoreIdDTO): Promise<Product | undefined>
    findByCategories(categories: string[]): Promise<Product[]>
    findOne(product_id:string): Promise<Product | undefined>
    save(product: Product): Promise<Product>
}