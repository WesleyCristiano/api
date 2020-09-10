import ICreateSchoolDTO from "../dtos/ICreateSchoolDTO";
import School from '@modules/schools/infra/typeorm/entities/School'

export default interface ISchoolRepository{
    create(data: ICreateSchoolDTO): Promise<School>;
    findById(school_id: string): Promise<School | undefined>;
}