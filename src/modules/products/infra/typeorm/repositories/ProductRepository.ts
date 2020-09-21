import {getRepository, Repository} from 'typeorm'
import Product from '../entities/Product'
import IProductRepository from '@modules/products/repositories/IProductRepository'
import ICreateProductDTO from '@modules/products/dtos/ICreateProductDTO'
import IFindByNameAndStoreIdDTO from '@modules/products/dtos/IFindByNameAndStoreIdDTO'

class ProductRepository implements IProductRepository{

    private ormRepository: Repository<Product>

    constructor(){
        this.ormRepository = getRepository(Product)
    }

    public async create({store_id,name,description,quantity,price,categories}:ICreateProductDTO): Promise<Product>{

        const product = this.ormRepository.create({ store_id, name, description, quantity, price, categories})
        await this.ormRepository.save(product)
        return product
    }

    public async findByNameAndByStoreId({name, store_id}: IFindByNameAndStoreIdDTO): Promise<Product | undefined>{
        const product = await this.ormRepository.createQueryBuilder('product')
            .where('product.name = :name',{name}).andWhere('product.store_id = :store_id',{store_id}).getOne()
        
        return product
    }

    public async findByCategories(categories:string[]): Promise<Product[]>{
        
        const products = await this.ormRepository
        .createQueryBuilder('product')
        .leftJoinAndSelect('product.categories', 'categories')
        .leftJoinAndSelect('product.images_product', 'images_product')
        .where("categories.name = Any(:categories)", {categories})
        .getMany()  
        return products
    }

    public async findOne(product_id:string): Promise<Product |undefined>{
        const product = await this.ormRepository.findOne({
            where: {
                id: product_id
            }
        })
        return product
    }
    public async save(product: Product):Promise<Product>{
        const productSave = await this.ormRepository.save(product, {
        })
        return productSave
    }


}

export default ProductRepository