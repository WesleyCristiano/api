import {getRepository, Repository} from 'typeorm'
import IImageProductRepository from '../../../repositories/IImageProductRepository'
import ImageProduct from '../entities/ImageProduct'

class ImageProductRepository implements IImageProductRepository{

    private ormRepository: Repository<ImageProduct>

    constructor(){
        this.ormRepository = getRepository(ImageProduct)
    }

    public async create(images: string[]): Promise<ImageProduct[]>{

        const productImages = this.ormRepository.create(images.map(image=>{
            return {file_name: image}
        }))
        // await this.ormRepository.save(productImages)
        return productImages
    }




}

export default ImageProductRepository