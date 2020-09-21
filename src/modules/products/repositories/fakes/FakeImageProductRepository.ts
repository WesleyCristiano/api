import Product from "@modules/products/infra/typeorm/entities/Product";
import ICreateProductDTO from '@modules/products/dtos/ICreateProductDTO'
import IImageProductRepository from "../IImageProductRepository";
import ImageProduct from "@modules/products/infra/typeorm/entities/ImageProduct";


class FakeImageProductRepository implements IImageProductRepository{
    private imageProducts: ImageProduct[] = []

    public async create(images: string[] ): Promise<ImageProduct[]>{    
        const imagesProducts = images.map(image=>{
            const img = new ImageProduct()
            img.id = 'imageID',
            img.file_name = image
            return img
        })
        return imagesProducts
    }

   
}
export default FakeImageProductRepository