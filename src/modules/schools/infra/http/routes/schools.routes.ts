import {Router} from 'express'
import SchoolsController from '@modules/schools/infra/http/controllers/SchoolsController'
import SchoolsInCityController from "@modules/schools/infra/http/controllers/SchoolsInCityController"

const schoolsRouter = Router()
const schoolsController = new SchoolsController()
const schoolsInCityController = new SchoolsInCityController()

schoolsRouter.post('/', schoolsController.create)
schoolsRouter.get('/', schoolsInCityController.index)



export default schoolsRouter