import {Request, Response} from 'express'
import { container } from 'tsyringe'
import CreateSchoolService from '@modules/schools/services/CreateSchoolService'


class SchoolsController{
    public async create(request: Request, response: Response): Promise<Response>{
        const {name, address} = request.body
        const createStoreService = container.resolve(CreateSchoolService)
        const school = await createStoreService.execute({ 
            name,
            address
        })
        return response.json(school)
    }
}

export default SchoolsController