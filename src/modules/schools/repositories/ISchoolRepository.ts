import ICreateSchoolDTO from "../dtos/ICreateSchoolDTO";
import School from '@modules/schools/infra/typeorm/entities/School'
import IFindAllSchoolsInCityDTO from "../dtos/IFindAllSchoolsInCityDTO";

export default interface ISchoolRepository{
    create(data: ICreateSchoolDTO): Promise<School>;
    findById(school_id: string): Promise<School | undefined>;
    findByName(name:string): Promise<School | undefined>;
    findAllSchoolInCity(data: IFindAllSchoolsInCityDTO): Promise<School[]>;
}