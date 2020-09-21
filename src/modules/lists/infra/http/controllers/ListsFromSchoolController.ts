import {Request, Response} from 'express'
import { container } from 'tsyringe'
import ShowAllListsFromSchoolService from '@modules/lists/services/ShowAllListsFromSchoolService'


class ListsFromSchoolController{
    public async index(request: Request, response: Response): Promise<Response>{
        const {school_id} = request.params
        const createStoreService = container.resolve(ShowAllListsFromSchoolService)
        const lists = await createStoreService.execute(school_id)
        return response.json(lists)
    }
}

export default ListsFromSchoolController