import { Request, Response } from "express";
import {container} from 'tsyringe'
import ShowProductsFromListToCustomerService from "@modules/products/services/ShowProductsFromListToCustomerService";


class ShowProductsToCustomerController{
    public async index(request: Request, response: Response): Promise<Response>{
        const {list_id} = request.params
        
        const showProductsFromList = container.resolve(ShowProductsFromListToCustomerService)
        const products = await showProductsFromList.execute({
            list_id
        })        
        return response.json(products)
        
    }
}

export default ShowProductsToCustomerController