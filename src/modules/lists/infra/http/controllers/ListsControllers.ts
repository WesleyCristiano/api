import {Request, Response} from 'express'
import { container } from 'tsyringe'
import CreateListService from '@modules/lists/services/CreateListService'


class ListsControllers{
    public async create(request: Request, response: Response): Promise<Response>{
        const {school_id, grade_name, items} = request.body
        const createStoreService = container.resolve(CreateListService)
        const list = await createStoreService.execute({ 
            school_id,
            grade_name,
            items
        })
        return response.json(list)
    }
}

export default ListsControllers