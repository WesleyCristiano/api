import {uuid} from 'uuidv4'

import Address from "@modules/addresses/infra/typeorm/entities/Address"
import IAddressRepository from '../IAdrressRepository'
import ICreateAddressDTO from '@modules/addresses/dtos/ICreateAddressDTO'

export default class FakeAddressRepository implements IAddressRepository {
    private addresses: Address[] = []
    
    public create(data: ICreateAddressDTO): Address{
        const address = new Address ()
        
        address.id = uuid()
        address.zipcode = data.zipcode
        address.public_place = data.public_place
        address.number = data.number
        address.city = data.city
        address.state = data.state
        this.addresses.push(address)
        return address
    }
}