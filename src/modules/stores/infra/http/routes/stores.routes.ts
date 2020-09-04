import {Router} from 'express'
import StoresController from '../controllers/StoresController'

const storesRouter = Router()
const storesController = new StoresController()

storesRouter.post('/', storesController.create)


export default storesRouter