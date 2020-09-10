import ICreateItemDTO from "../dtos/ICreateItemDTO";
import Item from "../infra/typeorm/entities/Item";

export default interface IItemRepository{
    create(data: ICreateItemDTO): Promise<Item>
    createWidthPromise(data: ICreateItemDTO): Item;
}