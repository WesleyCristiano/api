import {Router} from 'express'
import ListsController from '@modules/lists/infra/http/controllers/ListsController'
import ListsFromSchoolController from '@modules/lists/infra/http/controllers/ListsFromSchoolController'
import ShowProductsFromList from '@modules/lists/infra/http/controllers/ShowProductsFromList'

const listsRouter = Router()
const listsController = new ListsController()
const listFromSchoolController = new ListsFromSchoolController()
const showProductsFromList = new ShowProductsFromList()

listsRouter.post('/', listsController.create)
listsRouter.get('/:school_id', listFromSchoolController.index)
listsRouter.get('/:list_id/products', showProductsFromList.index)



export default listsRouter