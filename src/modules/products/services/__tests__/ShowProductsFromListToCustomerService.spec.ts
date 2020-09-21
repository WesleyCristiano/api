import FakeCategoryRepository from "@modules/categories/repositories/fakes/FakeCategoryRepository";
import FakeProductRepository from "@modules/products/repositories/fakes/FakeProductRepository";
import FakeItemRepository from "@modules/items/repositories/fakes/FakeItemRepository";
import FakeListRepository from "@modules/lists/repositories/fakes/FakeListRepository";
import ShowProductsFromListToCustomerService from "../ShowProductsFromListToCustomerService";
import List from "@modules/lists/infra/typeorm/entities/List";
import Item from "@modules/items/infra/typeorm/entities/Item";

describe('ShowProductsFromListToCustomer', ()=>{
    let fakeCategoryRepository: FakeCategoryRepository;
    let fakeProductRepository: FakeProductRepository;
    let fakeItemRepository: FakeItemRepository;
    let fakeListRepository: FakeListRepository;
    let showProductsFromListToCustomerService: ShowProductsFromListToCustomerService
    let list: List
    let item1: Item
    let item2: Item
    let item3: Item
    let item4: Item

    beforeEach(async()=>{
        fakeCategoryRepository = new FakeCategoryRepository()
        const caderno = await fakeCategoryRepository.create({
            name: 'caderno'})

        const cadernoBrochura = await fakeCategoryRepository.create({
            name: 'caderno brochura'})

        const caneta = await fakeCategoryRepository.create({
            name: 'caneta'})

        const cadernoUniversitario = await fakeCategoryRepository.create({
            name: 'caderno universitario'})

        const lapisDeCor = await fakeCategoryRepository.create({
            name: 'lapis de cor'})

        const gizDeCera = await fakeCategoryRepository.create({
            name: 'giz de cera'})

        fakeProductRepository = new FakeProductRepository()
        fakeProductRepository.create({
            name: "Giz de Cera doze cores",
            price: 1.50,
            quantity: 100,
            store_id: "123456-123132456",
            categories: [
                { name: 'giz de cera'}
            ]
        })

        fakeProductRepository.create({
            name:'Caderno universitário 10 materias minnie',
            price: 15.02,
            quantity: 10,
            store_id: '123456-123132456',
            categories: [
                {name: 'caderno'},
                {name: 'caderno universitario'}
            ]
        })
        fakeProductRepository.create({
            name:'Caderno Brochurão Buzz Lightyear',
            price: 29.90,
            quantity: 100,
            store_id: '123456-123132456',
            categories: [
                {name: 'caderno'},
                {name: 'caderno brochura'}
            ]
        })
        fakeProductRepository.create({
            name:'Lápis de Cor Faber-Castel',
            price: 19.90,
            quantity: 100,
            store_id: '123456-123132456',
            categories: [
                {name: 'lapis de cor'},
            ]
        })
        fakeProductRepository.create({
            name:'Caneta esferográfica bic preta',
            price: 19.90,
            quantity: 100,
            store_id: '123456-123132456',
            categories: [
                {name: 'caneta'},
            ]
        })
        fakeProductRepository.create({
            name:'Caneta esferográfica bic azul',
            price: 19.90,
            quantity: 100,
            store_id: '123456-123132456',
            categories: [
                {name: 'caneta'},
            ]
        })

        fakeItemRepository = new FakeItemRepository()
        item1 = await  fakeItemRepository.create({
            order_number: 1,
            description: '2 canetas esferográficas preta',
            categories: [caneta],
        
        })
    
        item2 = await fakeItemRepository.create({
            order_number: 2,
            description: '1 caderno universitario',
            categories: [caderno, cadernoUniversitario]  
        })

        item3 = await fakeItemRepository.create({
            order_number: 3,
            description: '1 caderno brochura 96 folhas',
            categories: [caderno, cadernoBrochura]  
        })
        item4 = await fakeItemRepository.create({
            order_number: 4,
            description: '1 caixa de lápis de cor',
            categories: [lapisDeCor]  
        })
        item1.list_id = 'listId'
        item2.list_id = 'listId'
        item3.list_id = 'listId'
        item4.list_id = 'listId'

        fakeListRepository = new FakeListRepository()
        list = await fakeListRepository.create({
            
            school_id: "school_id",
            grade_name: '4 ano',
            items: [
                item1, item2, item3, item4
            ] 
        })
        list.id = 'listId'

        showProductsFromListToCustomerService = new ShowProductsFromListToCustomerService(
            fakeItemRepository, fakeProductRepository
            )
        })

    it('should be able to show all an list of products organized by the categories of items', async ()=>{

        const item = await fakeItemRepository.findByListId('listId')
        
        
        const products = await showProductsFromListToCustomerService.execute({
            list_id: 'listId' })
        expect(products).toHaveLength(4)
        })
        
    })

    
    