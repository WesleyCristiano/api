import Category from "../infra/typeorm/entities/Category";
import { injectable, inject } from "tsyringe";
import { getRepository } from "typeorm";
import ICategoryRepository from "../repositories/ICategoryRepository";
import AppError from "@shared/erros/AppError";

interface IRequest{
    name: string
}

@injectable()
class CreateCategoryService{

    constructor(
        @inject('CategoryRepository')
        private categoryRepository: ICategoryRepository
    ){

    }
    
    public async execute({name}: IRequest): Promise<Category>{

        const categoryExists = await this.categoryRepository.findByName(name)

        if(categoryExists){
            throw new AppError('This category already exists')
        }

        const category = await this.categoryRepository.create({name})
        return category
    }
}

export default CreateCategoryService