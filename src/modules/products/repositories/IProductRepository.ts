import ICreateProductDTO from "../dtos/ICreateProductDTO";
import Product from "../infra/typeorm/entities/Product";
import IFindByNameAndStoreIdDTO from "../dtos/IFindByNameAndStoreIdDTO";

export default interface IProductRepository{
    create(data:ICreateProductDTO): Promise<Product>
    findByNameAndByStoreId( data: IFindByNameAndStoreIdDTO): Promise<Product | undefined>
}