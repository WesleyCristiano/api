import Router from 'express'
import ProductsController from '../controllers/ProductsController'
import multer from 'multer'
import uploadconfig from '@config/uploads'

const upload = multer(uploadconfig.multer)

const productsRouter = Router()
const productsController = new  ProductsController()

productsRouter.post('/', productsController.create)
productsRouter.patch('/:product_id/images', upload.array('product_images', 3), productsController.update)

export default productsRouter