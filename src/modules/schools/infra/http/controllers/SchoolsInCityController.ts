import {Request, Response} from 'express'
import { container } from 'tsyringe'
import FindAllSchoolsInCityService from '@modules/schools/services/FindAllSchoolsInCityService'


class SchoolsInCityController{
    public async index(request: Request, response: Response): Promise<Response>{

            const {city, state} = request.query
            const findSchoolInCityService = container.resolve(FindAllSchoolsInCityService)
            const schools = await findSchoolInCityService.execute({
                city: String(city),
                state: String(state)
            })
            return response.json(schools)
    }
}

export default SchoolsInCityController