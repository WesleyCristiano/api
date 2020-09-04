import { container} from 'tsyringe'

import IStoreRepository from '@modules/stores/repositories/IStoreRepository'
import StoreRepository from '@modules/stores/infra/typeorm/repositories/StoreRepository'
import IAddressRepository from '@modules/addresses/repositories/IAdrressRepository'
import AddressRepository from '@modules/addresses/infra/typeorm/repositories/AddressRepository'


container.registerSingleton<IStoreRepository>(
    'StoreRepository', StoreRepository)

container.registerSingleton<IAddressRepository>(
    'AddressRepository', AddressRepository)
