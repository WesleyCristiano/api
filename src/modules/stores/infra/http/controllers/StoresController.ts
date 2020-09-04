import {Request, Response} from 'express'
import { container } from 'tsyringe'
import CreateStoreService from '@modules/stores/services/CreateStoreService'


class StoresController{
    public async create(request: Request, response: Response): Promise<Response>{
        const {company_name, cnpj, logo, email, password, phone_number, address} = request.body
        const createStoreService = container.resolve(CreateStoreService)
        const store = await createStoreService.execute({ 
            company_name, logo, email, password, phone_number, cnpj, address
        })
        return response.json(store)
    }
}

export default StoresController