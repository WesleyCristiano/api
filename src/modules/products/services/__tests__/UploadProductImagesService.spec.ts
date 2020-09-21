import FakeProductRepository from "@modules/products/repositories/fakes/FakeProductRepository";
import { uuid } from "uuidv4";
import IImageProductRepository from "@modules/products/repositories/IImageProductRepository";
import UploadProductImagesService from "../UploadProductImagesService";
import FakeImageProductRepository from "@modules/products/repositories/fakes/FakeImageProductRepository";
import FakeStorageProvider from "@shared/container/providers/StorageProvider/fakes/FakeStorageProvider";
import Product from "@modules/products/infra/typeorm/entities/Product";
import ImageProductRepository from "@modules/products/infra/typeorm/repositories/ImageProductRepository";

describe('UploadProductsImages', ()=>{
    let fakeProductRepository: FakeProductRepository;
    let fakeImageProductRepository: IImageProductRepository;
    let fakeStorageProvider: FakeStorageProvider
    let uploadProductsImagesService: UploadProductImagesService;
    let product: Product

    beforeEach(async()=>{
        fakeProductRepository = new FakeProductRepository()
        fakeImageProductRepository = new FakeImageProductRepository()
        fakeStorageProvider = new FakeStorageProvider()
        
        uploadProductsImagesService = new UploadProductImagesService(
            fakeProductRepository, fakeImageProductRepository, fakeStorageProvider
        )
        product = await fakeProductRepository.create({
            name: "borracha",
            price: 12,
            quantity: 50,
            store_id: 'storeId',
            categories: [{name: 'borracha'}],
        })
        product.id = 'productID'
    })
    it('should be able save images from product', async ()=>{

        const imagesProduct = await uploadProductsImagesService.execute({
            product_id: 'productID',
            images: [ 'image1.png', 'image2.png']
        })
        expect(imagesProduct).toHaveProperty('id')
        expect(imagesProduct).toEqual(expect.objectContaining({
            id: 'productID'
        }))
        expect(imagesProduct).toEqual(expect.objectContaining({
            images_product:[
                {
                    id: 'imageID',
                    file_name: 'image1.png',
                },
                {
                    id: 'imageID',
                    file_name: 'image2.png',
                }
            ]
        }))
        
    })  
})
