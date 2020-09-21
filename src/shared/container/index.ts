import { container} from 'tsyringe'
import '@shared/container/providers'

import IStoreRepository from '@modules/stores/repositories/IStoreRepository'
import StoreRepository from '@modules/stores/infra/typeorm/repositories/StoreRepository'
import IAddressRepository from '@modules/addresses/repositories/IAdrressRepository'
import AddressRepository from '@modules/addresses/infra/typeorm/repositories/AddressRepository'
import ICategoryRepository from '@modules/categories/repositories/ICategoryRepository'
import CategoryRepository from '@modules/categories/infra/typeorm/repositories/CategoryRepository'
import IProductRepository from '@modules/products/repositories/IProductRepository'
import ProductRepository from '@modules/products/infra/typeorm/repositories/ProductRepository'
import IItemRepository from '@modules/items/repositories/IItemRepository'
import ItemRepository from '@modules/items/infra/typeorm/repository/ItemRepository'
import IListRepository from '@modules/lists/repositories/IListRepository'
import ListRepository from '@modules/lists/infra/typeorm/repository/ListRepository'
import ISchoolRepository from '@modules/schools/repositories/ISchoolRepository'
import SchoolRepository from '@modules/schools/infra/typeorm/repositories/SchoolRepository'
import IImageProductRepository from '@modules/products/repositories/IImageProductRepository'
import ImageProductRepository from '@modules/products/infra/typeorm/repositories/ImageProductRepository'


container.registerSingleton<IStoreRepository>(
    'StoreRepository', StoreRepository)

container.registerSingleton<IAddressRepository>(
    'AddressRepository', AddressRepository)

container.registerSingleton<ICategoryRepository>(
    'CategoryRepository', CategoryRepository)

container.registerSingleton<IProductRepository>(
    'ProductRepository', ProductRepository)

container.registerSingleton<IItemRepository>(
    'ItemRepository', ItemRepository)

container.registerSingleton<IListRepository>(
    'ListRepository', ListRepository)

container.registerSingleton<ISchoolRepository>(
    'SchoolRepository', SchoolRepository)

container.registerSingleton<IImageProductRepository>(
        'ImageProductRepository', ImageProductRepository)
    