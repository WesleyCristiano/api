import FakeCategoryRepository from "@modules/categories/repositories/fakes/FakeCategoryRepository"
import CreateCategoryService from '@modules/categories/services/CreateCategoryService'
import AppError from "@shared/erros/AppError";

describe('CreateCategory', ()=>{
    let fakeCategoryRepository: FakeCategoryRepository;
    let categoryService: CreateCategoryService

    beforeEach(()=>{
        fakeCategoryRepository = new FakeCategoryRepository()
        categoryService = new CreateCategoryService(fakeCategoryRepository)

        })

    it('should be able to create a new category', async()=>{
        const category =  await categoryService.execute({
            name: 'Lapis de Cor'
        })
        expect(category).toHaveProperty('id')
    })

    it('should not be able to create a category already created', async()=>{
        const category =  await categoryService.execute({
            name: 'Lapis de Cor'
        })
        
        await expect(categoryService.execute({
            name: 'Lapis de Cor'
        })).rejects.toBeInstanceOf(AppError)
    })

})