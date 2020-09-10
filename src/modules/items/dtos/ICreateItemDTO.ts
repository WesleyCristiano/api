import Category from "@modules/categories/infra/typeorm/entities/Category";

export default interface ICreateItemDTO{
    order_number: number;
    description: string;
    categories: Category[]
}