import ICategoryRepository from "@modules/categories/repositories/ICategoryRepository";
import Category from "@modules/categories/infra/typeorm/entities/Category";
import ICreateCategoryDTO from "@modules/categories/dtos/ICreateCategoryDTO";
import { uuid } from "uuidv4";


class FakeCategoryRepository implements ICategoryRepository{

    private categories: Category[] = []

    public  async create({name}: ICreateCategoryDTO): Promise<Category>{
        const categoryExsits = this.categories.find(category=> category.name ===name)

        if(categoryExsits){
            return categoryExsits
        }
        const category = new Category()
        category.id = uuid()
        category.name = name
        this.categories.push(category)
        return category;
    }

    public async findByName(name:string): Promise<Category |undefined>{
        return  this.categories.find(category=> category.name ===name)
    }

    public async findAllByNames(names:string[]): Promise<Category[]>{
        return this.categories.filter(category=> {
            return names.find(name=> category.name === name)
        })
    }
}

export default FakeCategoryRepository