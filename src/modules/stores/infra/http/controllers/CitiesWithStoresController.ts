import {Request, Response} from 'express'
import { container } from 'tsyringe'
import FindAllCitiesWithStoresService from '@modules/stores/services/FindAllCitiesWithStoresService'


class CitiesWithStoresController{
    public async index(request: Request, response: Response): Promise<Response>{
        const findAllCitiesWithStore = container.resolve(FindAllCitiesWithStoresService)
        const stores = await findAllCitiesWithStore.execute()
        return response.json(stores)
    }
}

export default CitiesWithStoresController