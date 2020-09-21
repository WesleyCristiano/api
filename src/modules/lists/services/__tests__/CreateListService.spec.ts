import FakeCategoryRepository from "@modules/categories/repositories/fakes/FakeCategoryRepository";
import FakeListRepository from "@modules/lists/repositories/fakes/FakeListRepository";
import FakeItemRepository from "@modules/items/repositories/fakes/FakeItemRepository";
import CreateListService from "../CreateListService";
import School from "@modules/schools/infra/typeorm/entities/School";
import FakeSchoolRepository from "@modules/schools/repositories/fakes/FakeSchoolRepository";
import AppError from "@shared/erros/AppError";

describe('CreateList', ()=>{
    let fakeCategoryRepository: FakeCategoryRepository;
    let fakeItemRepository: FakeItemRepository
    let fakeListRepository: FakeListRepository
    let fakeSchoolRepository: FakeSchoolRepository
    let createListService: CreateListService
    
    let school: School;

    beforeEach(async()=>{
        fakeCategoryRepository = new FakeCategoryRepository();
        fakeItemRepository = new FakeItemRepository();
        fakeSchoolRepository = new FakeSchoolRepository();
        fakeListRepository = new FakeListRepository()
        createListService = new CreateListService(fakeListRepository,
            fakeItemRepository, fakeCategoryRepository, fakeSchoolRepository)
        
        school = await fakeSchoolRepository.create({
            name: 'Escola Teste',
            address: {
                zipcode: "79801017",
                public_place: "Rua dos Jardins",
                number: "123",
                city: "Naviraí",
                state: "MS",
                complement: "Fundos",
                reference_point: "Perto da Praça Central"
            }
        }) 
    })

    it('should be able to create a new list', async ()=>{
        const list = await createListService.execute({
            school_id: school.id,
            grade_name: '4 ano',
            items:[
                {
                    order_number: 1, 
                    description: '1 Caixa de lápis de cor 24 cores',
                    categories: ['lapis de cor']    
                },
                {
                    order_number: 2, 
                    description: '500 folhas de papel sulfite',
                    categories: ['papel sulfite']    
                },
            ]
        })

        expect(list).toHaveProperty('id')
    })

    it('should not be able to create a new list with a no-existing school', async ()=>{
        
        await expect(createListService.execute({
            school_id: 'no-existing_id',
            grade_name: '4 ano',
            items:[
                {
                    order_number: 1, 
                    description: '1 Caixa de lápis de cor 24 cores',
                    categories: ['lapis de cor']    
                },
                {
                    order_number: 2, 
                    description: '500 folhas de papel sulfite',
                    categories: ['papel sulfite']    
                },
            ]
        })).rejects.toBeInstanceOf(AppError)
    })

    it('should not be able to create a more than one list to one grade of an school', async ()=>{

        const list = await createListService.execute({
            school_id: school.id,
            grade_name: '4 ano',
            items:[
                {
                    order_number: 1, 
                    description: '1 Caixa de lápis de cor 24 cores',
                    categories: ['lapis de cor']    
                },
                {
                    order_number: 2, 
                    description: '500 folhas de papel sulfite',
                    categories: ['papel sulfite']    
                },
            ]
        })

        
        await expect(createListService.execute({
            school_id: school.id,
            grade_name: '4 ano',
            items:[
                {
                    order_number: 1, 
                    description: '1 Caixa de lápis de cor 24 cores',
                    categories: ['lapis de cor']    
                },
                {
                    order_number: 2, 
                    description: '500 folhas de papel sulfite',
                    categories: ['papel sulfite']    
                },
            ]
        })).rejects.toBeInstanceOf(AppError)
    })

}) 