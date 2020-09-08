import { container} from 'tsyringe'

import IStoreRepository from '@modules/stores/repositories/IStoreRepository'
import StoreRepository from '@modules/stores/infra/typeorm/repositories/StoreRepository'
import IAddressRepository from '@modules/addresses/repositories/IAdrressRepository'
import AddressRepository from '@modules/addresses/infra/typeorm/repositories/AddressRepository'
import ICategoryRepository from '@modules/categories/repositories/ICategoryRepository'
import CategoryRepository from '@modules/categories/infra/typeorm/repositories/CategoryRepository'
import IProductRepository from '@modules/products/repositories/IProductRepository'
import ProductRepository from '@modules/products/infra/typeorm/repositories/ProductRepository'


container.registerSingleton<IStoreRepository>(
    'StoreRepository', StoreRepository)

container.registerSingleton<IAddressRepository>(
    'AddressRepository', AddressRepository)

container.registerSingleton<ICategoryRepository>(
    'CategoryRepository', CategoryRepository)

container.registerSingleton<IProductRepository>(
    'ProductRepository', ProductRepository)