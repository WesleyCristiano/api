import FakeCategoryRepository from "@modules/categories/repositories/fakes/FakeCategoryRepository";
import FakeProductRepository from "@modules/products/repositories/fakes/FakeProductRepository";
import CreateProductService from "../CreateProductService";
import { uuid } from "uuidv4";
import AppError from "@shared/erros/AppError";

describe('CreateProduct', ()=>{
    let fakeCategoryRepository: FakeCategoryRepository;
    let fakeProductRepository: FakeProductRepository;
    let createProductService: CreateProductService

    beforeEach(()=>{
        fakeCategoryRepository = new FakeCategoryRepository()
        fakeCategoryRepository.create({
            name: 'giz de cera'})
        fakeProductRepository = new FakeProductRepository()
        createProductService = new CreateProductService(
            fakeCategoryRepository, fakeProductRepository)
        })

    it('should be able to create a new product', async ()=>{

        const product = await createProductService.execute({
            name: 'Giz de Cera 12 Cores',
            store_id: uuid(),
            quantity: 100,
            price: 3.45,
            categories: [
                'giz de cera'
            ]})

        expect(product).toHaveProperty('id')
        })

    it('should not be able to create a product without category', async()=>{

        await expect(createProductService.execute({
            name: 'Giz de Cera 12 Cores',
            store_id: uuid(),
            quantity: 100,
            price: 3.45,
            categories: []})).rejects.toBeInstanceOf(AppError)
            
    })

    it('should be able to create a new product with the same name of other product', async ()=>{

        const product = await createProductService.execute({
            name: 'Giz de Cera 12 Cores',
            store_id: uuid(),
            quantity: 100,
            price: 3.45,
            categories: [
                'giz de cera'
            ]})

        await expect(createProductService.execute({
            name: 'Giz de Cera 12 Cores',
            store_id: product.store_id,
            quantity: 150,
            price: 3.50,
            categories: [
                'giz de cera'
            ]})).rejects.toBeInstanceOf(AppError)
        })
        
    })

    
    