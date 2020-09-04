import {getRepository, Repository} from 'typeorm'
import Address from '../entities/Address'
import IAddressRepository from '@modules/addresses/repositories/IAdrressRepository'
import ICreateAddressDTO from '@modules/addresses/dtos/ICreateAddressDTO'

class AddressRepository implements IAddressRepository{

    private ormRepository: Repository<Address>

    constructor(){
        this.ormRepository = getRepository(Address)
    }

    public create(data: ICreateAddressDTO): Address{
        const address = this.ormRepository.create(data)
        return address
    }

}

export default AddressRepository