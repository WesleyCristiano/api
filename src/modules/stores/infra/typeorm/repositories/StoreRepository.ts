import {getRepository, Repository} from 'typeorm'
import Store from '../entities/Store'
import IStoreRepository from '@modules/stores/repositories/IStoreRepository'
import ICreateStoreDTO from '@modules/stores/dtos/ICreateStoreDTO'
import IFindStoreWithSameDataDTO from '@modules/stores/dtos/IFindStoreWithSameDataDTO'
import IFindAllInCityDTO from '@modules/stores/dtos/IFindAllInCityDTO'

class StoreRepository implements IStoreRepository{

    private ormRepository: Repository<Store>

    constructor(){
        this.ormRepository = getRepository(Store)
    }

    public async create({company_name, logo, cnpj, email,phone_number, password, address
    }: ICreateStoreDTO): Promise<Store>{
        
        const store = this.ormRepository.create({
            company_name, email, logo, cnpj, password, phone_number, address})
        await this.ormRepository.save(store)
        return store
    }
    
    public async findStoreWithSameData({cnpj, email}: IFindStoreWithSameDataDTO): Promise<Store | undefined> {

        const store =  await this.ormRepository.createQueryBuilder('store')
            .where("store.email = :email", {email}).orWhere("store.cnpj = :cnpj", {cnpj}).getOne()
    
        return store
    }

    public async findAllInCity({city, state}: IFindAllInCityDTO): Promise <Store[]|undefined>{
        const stores = await this.ormRepository.createQueryBuilder('store')
            .leftJoinAndSelect('store.address', 'address')
            .where('address.city = :city', {city})
            .andWhere('address.state = :state', {state}).getMany()
            
        return stores    
    }

}

export default StoreRepository