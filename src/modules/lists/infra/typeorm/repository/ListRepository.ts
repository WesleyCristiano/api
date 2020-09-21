import IListRepository from "@modules/lists/repositories/IListRepository";
import ICreateListDTO from "@modules/lists/dtos/ICreateListDTO";
import { Repository, getRepository } from "typeorm";
import List from "../entities/List";
import IFindListDTO from "@modules/lists/dtos/IFindListDTO";

class ListRepository implements IListRepository{

    private ormRepository: Repository<List>
    constructor(){
        this.ormRepository = getRepository(List)
    }
    public async create({school_id, grade_name, items}:ICreateListDTO): Promise<List>{
        const list = this.ormRepository.create({
            school_id,
            grade_name,
            items
        })
        await this.ormRepository.save(list)
        return list
    }

    public async findList({school_id, grade_name}:IFindListDTO): Promise<List | undefined>{
        const list = await this.ormRepository.createQueryBuilder('list')
            .where("list.school_id = :school_id", {school_id})
            .andWhere("list.grade_name = :grade_name", {grade_name}).getOne()

        return list
    }
    public async findBySchool(school_id:string): Promise<List[]>{
        const lists = await this.ormRepository.find({
            loadRelationIds: true,
            where: {school_id}
        })
        return lists
    }
}

export default ListRepository