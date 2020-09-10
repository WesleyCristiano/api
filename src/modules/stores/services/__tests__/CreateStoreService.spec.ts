import FakeStoreRepository from "@modules/stores/repositories/fakes/FakeStoreRepository"
import FakeAddressRepository from "@modules/addresses/repositories/fakes/FakeAddressRepository";
import CreateStoreService from "../CreateStoreService";
import AppError from "@shared/erros/AppError";

describe('CreateStore', ()=>{
    let fakeStoreRepository: FakeStoreRepository;
    let fakeAddressRepository: FakeAddressRepository;
    let createStoreService: CreateStoreService

    beforeEach(()=>{
        fakeAddressRepository = new FakeAddressRepository(),
        fakeStoreRepository = new FakeStoreRepository(),
        createStoreService = new CreateStoreService(
            fakeStoreRepository, fakeAddressRepository)
        })

    it('should be able to create a new store', async ()=>{

        const store = await createStoreService.execute({
            company_name: 'Minha loja',
            cnpj: '03.155.926/0001-44',
            email: 'loja@loja.com',
            password: '123456',
            phone_number: '67996436388',
            address: fakeAddressRepository.create({
                zipcode: '79801017',
                public_place: 'Rua da minha casa',
                number: '123',
                city: 'Dourados',
                state: 'MS'
            })
        })
        
        expect(store).toHaveProperty('id')
    })

    it('should not be able to create a new store with an email or cnpj already use by other store', async ()=>{

        const store = await createStoreService.execute({
            company_name: 'Loja',
            cnpj: '03.155.926/0001-44',
            email: 'loja@loja.com',
            password: '123456',
            phone_number: '67996436388',
            address: fakeAddressRepository.create({
                zipcode: '79801017',
                public_place: 'Rua da minha casa',
                number: '123',
                city: 'Dourados',
                state: 'MS'
            })
        })

        await expect(createStoreService.execute({
            company_name: 'loja 2',
            cnpj: '03.155.926/0001-44',
            email: 'loja@loja.com',
            password: '123456',
            phone_number: '67996436388',
            address: fakeAddressRepository.create({
                zipcode: '79801023',
                public_place: 'Rua da loja',
                number: '456',
                city: 'Dourados',
                state: 'MS'
            })
        })).rejects.toBeInstanceOf(AppError)

        await expect(createStoreService.execute({
            company_name: 'loja 2',
            cnpj: '03.155.926/0002-88',
            email: 'loja@loja.com',
            password: '123456',
            phone_number: '67996436388',
            address: fakeAddressRepository.create({
                zipcode: '79801023',
                public_place: 'Rua da loja',
                number: '456',
                city: 'Dourados',
                state: 'MS'
            })
        })).rejects.toBeInstanceOf(AppError)

        await expect(createStoreService.execute({
            company_name: 'loja 2',
            cnpj: '03.155.926/0001-44',
            email: 'loja2@loja.com',
            password: '123456',
            phone_number: '67996436388',
            address: fakeAddressRepository.create({
                zipcode: '79801023',
                public_place: 'Rua da loja',
                number: '456',
                city: 'Dourados',
                state: 'MS'
            })
        })).rejects.toBeInstanceOf(AppError)
    })

    it('should be able to create a new store with the with a name already used in the same city-state', async ()=>{

        const store = await createStoreService.execute({
            company_name: 'Minha loja',
            cnpj: '00.000.000/0000-01',
            email: 'loja@loja.com',
            password: '123456',
            phone_number: '6799646468',
            address: fakeAddressRepository.create({
                zipcode: '79801017',
                public_place: 'Rua da minha casa',
                number: '123',
                city: 'Dourados',
                state: 'MS'
            })
        })

        await expect(createStoreService.execute({
            company_name: 'Minha loja',
            cnpj: '00.000.000/0000-02',
            email: 'outraloja@loja.com',
            password: '123456',
            phone_number: '67996436388',
            address: fakeAddressRepository.create({
                zipcode: '79801017',
                public_place: 'avenida da minha casa',
                number: '123',
                city: 'Dourados',
                state: 'MS'
            })
        })).rejects.toBeInstanceOf(AppError)
    })


}) 