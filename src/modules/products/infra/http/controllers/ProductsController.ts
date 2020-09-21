import { Request, Response } from "express";
import {container} from 'tsyringe'
import CreateProductService from "@modules/products/services/CreateProductService";
import UploadProductImagesService from "@modules/products/services/UploadProductImagesService";


class ProductsController{
    public async create(request: Request, response: Response): Promise<Response>{
    
        const { name, store_id, description, quantity, price, categories } = request.body
        const createProductService = container.resolve(CreateProductService)
        const product = await createProductService.execute({
            name, 
            store_id, 
            description, 
            quantity, 
            price,
            categories
        })

        return response.json(product)
    }

    public async update(request: Request, response:Response): Promise<Response>{
        const files = request.files as Express.Multer.File[]
        const {product_id} = request.params
        
        const images = files.map(file=>file.filename)
        
        const uploadProductImagesService = container.resolve(UploadProductImagesService)
        
        const product = await uploadProductImagesService.execute({
            product_id,
            images
        })  

        return response.json(product)
    }
}


export default ProductsController