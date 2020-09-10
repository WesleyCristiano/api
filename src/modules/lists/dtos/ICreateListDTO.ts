import ICreateItemDTO from "@modules/items/dtos/ICreateItemDTO";
import Item from "@modules/items/infra/typeorm/entities/Item";

export default interface ICreateListDTO{
    school_id: string;
    grade_name: string;
    items: Item[]
}