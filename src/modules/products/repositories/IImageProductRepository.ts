import ImageProduct from "../infra/typeorm/entities/ImageProduct";

export default interface IImageProductRepository{
    create(images:string[]): Promise<ImageProduct[]>;
}