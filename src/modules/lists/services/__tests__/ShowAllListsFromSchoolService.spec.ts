import FakeCategoryRepository from "@modules/categories/repositories/fakes/FakeCategoryRepository";
import FakeListRepository from "@modules/lists/repositories/fakes/FakeListRepository";
import FakeItemRepository from "@modules/items/repositories/fakes/FakeItemRepository";
import CreateListService from "../CreateListService";
import School from "@modules/schools/infra/typeorm/entities/School";
import FakeSchoolRepository from "@modules/schools/repositories/fakes/FakeSchoolRepository";
import ShowAllListsFromSchoolService from "../ShowAllListsFromSchoolService";

describe('ShowAllListsFromSchoolService', ()=>{
    let fakeCategoryRepository: FakeCategoryRepository;
    let fakeItemRepository: FakeItemRepository
    let fakeListRepository: FakeListRepository
    let fakeSchoolRepository: FakeSchoolRepository
    let createListService: CreateListService
    let showAllListsFromSchool: ShowAllListsFromSchoolService
    
    let school: School;

    beforeEach(async()=>{
        fakeCategoryRepository = new FakeCategoryRepository();
        fakeItemRepository = new FakeItemRepository();
        fakeSchoolRepository = new FakeSchoolRepository();
        fakeListRepository = new FakeListRepository()
        showAllListsFromSchool =  new ShowAllListsFromSchoolService(fakeListRepository)
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

        school.id = '7ecd3151-2495-4a48-9431-3a98c6fed9c5'

        const list1 = await createListService.execute({
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

        const list2 = await createListService.execute({
            school_id: school.id,
            grade_name: '5 ano',
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
    })

    it('should be able show all list from school', async ()=>{
        const lists = await showAllListsFromSchool.execute('7ecd3151-2495-4a48-9431-3a98c6fed9c5')

        expect(lists).toHaveLength(2)
        expect(lists).toEqual(expect.arrayContaining([
            expect.objectContaining({
            school_id: school.id,
            grade_name: '5 ano',        
        })]))
        
    })

}) 