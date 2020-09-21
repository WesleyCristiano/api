import FakeAddressRepository from "@modules/addresses/repositories/fakes/FakeAddressRepository";
import FakeSchoolRepository from "@modules/schools/repositories/fakes/FakeSchoolRepository";
import CreateSchoolService from "../CreateSchoolService";
import AppError from "@shared/erros/AppError";

describe('CreateSchool', ()=>{
    let fakeSchoolRepository: FakeSchoolRepository;
    let fakeAddressRepository: FakeAddressRepository;
    let createSchoolService: CreateSchoolService

    beforeEach(()=>{
        fakeAddressRepository = new FakeAddressRepository(),
        fakeSchoolRepository = new FakeSchoolRepository(),
        createSchoolService = new CreateSchoolService(
            fakeSchoolRepository, fakeAddressRepository)
        })

    it('should be able to create a new school', async ()=>{

        const school = await createSchoolService.execute({
            name: "Escola Teste",
            address: {
                zipcode: '79815000',
                public_place: 'Rua dos jardins',
                number: '12456',
                city: 'navirai',
                state: 'MS',
            }
        })
        
        expect(school).toHaveProperty('id')
    })
    it('should not be able to create a new school with the name', async ()=>{

        await createSchoolService.execute({
            name: "Escola Teste",
            address: {
                zipcode: '79815000',
                public_place: 'Rua dos jardins',
                number: '12456',
                city: 'navirai',
                state: 'MS',
            }
        })
        
        await expect(createSchoolService.execute({
            name: "Escola Teste",
            address: {
                zipcode: '79815000',
                public_place: 'Rua dos jardins',
                number: '12456',
                city: 'navirai',
                state: 'MS',
            }
        })).rejects.toBeInstanceOf(AppError)
    })

}) 