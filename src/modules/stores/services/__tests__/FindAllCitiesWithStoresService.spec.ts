import FakeStoreRepository from "@modules/stores/repositories/fakes/FakeStoreRepository"
import FindAllCitiesWithStoresService from "../FindAllCitiesWithStoresService";

describe('FindCitiesWithStores', ()=>{
    let fakeStoreRepository: FakeStoreRepository;
    let findCitiesWithStores: FindAllCitiesWithStoresService


    beforeEach(()=>{
        fakeStoreRepository = new FakeStoreRepository(),
        findCitiesWithStores = new FindAllCitiesWithStoresService(
            fakeStoreRepository
        )
        
        fakeStoreRepository.create({
            company_name: "Loja do Bairro",
            cnpj: "57.724.710/0001-81",
            email: "emaildaloja@hotmail.com",
            password: "123456",
            phone_number: "(67)996436388",
            address: {
                zipcode: '79950-000',
                public_place: "Rua dos jardins",
                number: '123',
                city: "Navirai",
                state: "MS"
                }
            })
            fakeStoreRepository.create({
                company_name: "Loja do centro",
                cnpj: "57.724.710/0001-82",
                email: "emaildalojda@hotmdail.com",
                password: "123456",
                phone_number: "(67)996436388",
                address: {
                    zipcode: '79950-000',
                    public_place: "Rua dos jardins",
                    number: '123',
                    city: "Navirai",
                    state: "MS"
                    }
                })

            fakeStoreRepository.create({
                company_name: "Loja do centro",
                cnpj: "57.724.710/0001-12",
                email: "emaildaljda@hotmdail.com",
                password: "123456",
                phone_number: "(67)996436388",
                address: {
                    zipcode: '79950-000',
                    public_place: "Rua dos jardins",
                    number: '123',
                    city: "Dourados",
                    state: "MS"
                    }
                })
        })

    it('should be able to find all Cities/State with stores', async ()=>{

        const stores = await findCitiesWithStores.execute()
    
        expect(stores).toEqual([
            {
                city: "Navirai", 
                state: "MS"
            },
            {
                "city": "Dourados",
                "state": "MS" 
            }  
        ])
        
    })
}) 