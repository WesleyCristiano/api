import ICreateListDTO from "../dtos/ICreateListDTO";
import List from "../infra/typeorm/entities/List";

export default interface IListRepository{
    create(data: ICreateListDTO): Promise<List>
}