import {Router} from 'express'
import CitiesWithStoresController from '../controllers/CitiesWithStoresController'
import StoresController from '../controllers/StoresController'

const storesRouter = Router()
const storesController = new StoresController()
const findAllCitiesController = new CitiesWithStoresController()

storesRouter.post('/', storesController.create)
storesRouter.get('/cities', findAllCitiesController.index)



export default storesRouter