import { Request, Response } from "express";
import {container} from 'tsyringe'
import CreateProductService from "@modules/products/services/CreateProductService";


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
}

export default ProductsController