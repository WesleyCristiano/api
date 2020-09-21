import ICreateListDTO from "../dtos/ICreateListDTO";
import List from "../infra/typeorm/entities/List";
import IFindListDTO from "../dtos/IFindListDTO";

export default interface IListRepository{
    create(data: ICreateListDTO): Promise<List>
    findList(data: IFindListDTO): Promise<List | undefined>
    findBySchool(school_id:string): Promise<List[]>
}