import IListRepository from "../repositories/IListRepository";
import { injectable, inject } from "tsyringe";
import List from "../infra/typeorm/entities/List";

@injectable()
class ShowAllListsFromSchoolService{
    constructor(
        @inject('ListRepository')
        private listRepository: IListRepository
    ){}

    public async execute(school_id:string): Promise<List[]>{
        const lists = await this.listRepository.findBySchool(school_id)
        return lists
    }
}

export default ShowAllListsFromSchoolService