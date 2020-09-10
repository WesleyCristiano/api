import {Router} from 'express'
import ListsControllers from '@modules/lists/infra/http/controllers/ListsControllers'

const listsRouter = Router()
const listsController = new ListsControllers()

listsRouter.post('/', listsController.create)


export default listsRouter