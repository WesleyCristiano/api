import ICreateStoreDTO from "../dtos/ICreateStoreDTO";
import Store from "../infra/typeorm/entities/Store";
import IFindStoreWithSameDataDTO from "../dtos/IFindStoreWithSameDataDTO";
import IFindAllInCityDTO from "../dtos/IFindAllInCityDTO";


export default interface IStoreRepository{

    create(data:ICreateStoreDTO): Promise<Store>
    findStoreWithSameData(data: IFindStoreWithSameDataDTO): Promise<Store | undefined>
    findAllInCity(data: IFindAllInCityDTO): Promise<Store[]|undefined>

}   