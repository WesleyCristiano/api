import { injectable, inject } from "tsyringe";
import IStoreRepository from "../repositories/IStoreRepository";
import Store from "../infra/typeorm/entities/Store";
import Address from "@modules/addresses/infra/typeorm/entities/Address";
import IAddressRepository from "@modules/addresses/repositories/IAdrressRepository";
import AppError from "@shared/erros/AppError";

interface IAddressRequest{
    zipcode: string;
    public_place:string;
    number:string;
    complement?:string;
    reference_point?:string;
    city: string;
    state: string;
}

interface IRequest{
    company_name: string;
    cnpj: string;
    logo?: string;
    email: string;
    password: string;
    phone_number: string;
    address: IAddressRequest;
}    
@injectable()
class CreateStoreService{

    constructor(
        @inject('StoreRepository')
        private storeRepository: IStoreRepository,
        @inject('AddressRepository')
        private addressRepositoy: IAddressRepository
    ){}

    public async execute({
        company_name, cnpj, email, password, phone_number, address
    }:IRequest): Promise<Store>{

        const storeAlreadyExisting = await this.storeRepository.findStoreWithSameData({cnpj, email})
         
        if(storeAlreadyExisting){
            throw new AppError('Already exists an store with this email or cnpj')
        }

        const allStoresIncity = await this.storeRepository.findAllInCity({
            city: address.city, state: address.state})
    
        if(allStoresIncity){
            allStoresIncity.forEach(store=>{
                if(store.company_name.toUpperCase() == company_name.toUpperCase()){
                    throw new AppError("Already exists a store with the same name in your city. Please, try other name")
                }
            })
        }
        
        const storeAddress = this.addressRepositoy.create(address)

        const store = await this.storeRepository.create({
            company_name, email, cnpj,password, phone_number, address: storeAddress
        })
        return store
    }
}

export default CreateStoreService