import {Router} from 'express'

import storesRouter from '@modules/stores/infra/http/routes/stores.routes'
import productsRouter from '@modules/products/infra/http/routes/products.routes';
import categoriesRouter from '@modules/categories/infra/http/routes/categories.routes'

const routes = Router();

routes.use('/stores', storesRouter)
routes.use('/products', productsRouter)
routes.use('/categories', categoriesRouter)




export default routes