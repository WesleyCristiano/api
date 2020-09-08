import ICreateCategoryDTO from '@modules/categories/dtos/ICreateCategoryDTO'

export default interface ICreateProdutDTO{
    name: string;
    store_id: string;
    description?:string;
    quantity: number;
    price: number;
    categories: ICreateCategoryDTO[];
}