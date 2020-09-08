import {uuid} from 'uuidv4'

import Store from "@modules/stores/infra/typeorm/entities/Store"
import IStoreRepository from "../IStoreRepository"
import ICreateStoreDTO from "@modules/stores/dtos/ICreateStoreDTO"
import Address from "@modules/addresses/infra/typeorm/entities/Address"
import IFindStoreWithSameDataDTO from '@modules/stores/dtos/IFindStoreWithSameDataDTO'
import IFindAllInCityDTO from '@modules/stores/dtos/IFindAllInCityDTO'

export default class FakeStoreRepository implements IStoreRepository {
    private stores: Store[] = []
    
    public async create({company_name, logo, cnpj,email, phone_number,password,address}: ICreateStoreDTO): Promise<Store>{
        const store = new Store()

        const storeAdress = new Address()
        store.id = uuid()
        storeAdress.zipcode = address.zipcode
        storeAdress.public_place = address.public_place
        storeAdress.number = address.number
        storeAdress.city = address.city
        storeAdress.state = address.state

        store.id = uuid()
        store.company_name = company_name
        store.cnpj = cnpj
        if(logo) {
            store.logo = logo
        }
        store.email = email
        store.password = password
        store.phone_number = phone_number
        store.address = storeAdress

        this.stores.push(store)
        return store

    }

    public async findStoreWithSameData({cnpj, email}: IFindStoreWithSameDataDTO): Promise<Store | undefined>{
        const store = this.stores.find(store=> store.email == email || store.cnpj == cnpj)
        return store
    }

    public async findAllInCity({city,state}: IFindAllInCityDTO): Promise <Store[] | undefined>{
        const stores = this.stores.filter(store=> store.address.city === city && store.address.state === state)
        return stores
    }

}