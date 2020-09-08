import ICreateCategoryDTO from '@modules/categories/dtos/ICreateCategoryDTO'
import Category from '../infra/typeorm/entities/Category';


export default interface ICategoryRepository{
    create(data: ICreateCategoryDTO): Promise<Category>;
    findByName(name:string): Promise<Category | undefined>
    findAllByNames(names: string[]): Promise<Category[]>
}