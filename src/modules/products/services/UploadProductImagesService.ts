import { inject, injectable } from "tsyringe";
import IProductRepository from "../repositories/IProductRepository";
import Product from "../infra/typeorm/entities/Product";
import IUploadImagesProductDTO from "@modules/products/dtos/IUploadImagesProductDTO";
import IImageProductRepository from "../repositories/IImageProductRepository";
import AppError from "@shared/erros/AppError";
import IStorageProvider from "@shared/container/providers/StorageProvider/models/IStorageProvider";

@injectable()
class UploadProductImagesService{
    constructor(
        @inject('ProductRepository')
        private productRepository: IProductRepository,
        @inject('ImageProductRepository')
        private imageProductRepository: IImageProductRepository,
        @inject('StorageProvider')
        private storageProvider: IStorageProvider
    ){}
    public async execute({product_id, images}:IUploadImagesProductDTO): Promise<Product>{
        //procurar o produto -> retornar erro se não existir
        //colocar colocar as criar as images e e salvar no disco
        //salvar as url no banco 
        //salvar o storage
        //deletar o arquivo temporario
        //não esquecer de verificar todas as promsies para nçao encher o disco
        const product = await this.productRepository.findOne(product_id)
        if(!product){
            throw new AppError('This product this not exists')
        }
        const imagesProducts = await this.imageProductRepository.create(images)
        product.images_product = imagesProducts
        const imagesPromise = images.map(async(img)=> await this.storageProvider.save(img))
        await Promise.all(imagesPromise)

        await this.productRepository.save(product)
        return product

    }
}

export default UploadProductImagesService