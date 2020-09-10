import IListRepository from "@modules/lists/repositories/IListRepository";
import ICreateListDTO from "@modules/lists/dtos/ICreateListDTO";
import { Repository, getRepository } from "typeorm";
import List from "../entities/List";

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
}

export default ListRepository