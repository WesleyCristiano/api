import { inject, injectable } from "tsyringe";
import IStoreRepository from "../repositories/IStoreRepository";
import Store from "../infra/typeorm/entities/Store";
import IAddressRepository from "@modules/addresses/repositories/IAdrressRepository";

interface IAddress{
    city: string;
    state: string;
}

@injectable()
class FindAllCitiesWithStoresService{

    constructor(
        @inject('StoreRepository')
        private storeRepository: IStoreRepository
    ){}

    public async execute(): Promise<any[]>{


        const stores = await this.storeRepository.findAllAddress()
        
        const array:string[] = []
        const addresses = stores.map((store, ind)=>{
            if(ind===0){
                array.push(`${store.address.city}+${store.address.state}`)
                return {
                    city: store.address.city,
                    state: store.address.state
                }
            }
            
            if(array.includes(`${store.address.city}+${store.address.state}`)){
                return null 
            }
            return {
                city: store.address.city,
                state: store.address.state
            }
        }).filter(el=> el !== null)
        

        return addresses
    }
}


export default FindAllCitiesWithStoresService