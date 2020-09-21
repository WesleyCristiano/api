import { injectable, inject } from "tsyringe"
import ISchoolRepository from "../repositories/ISchoolRepository"
import School from "../infra/typeorm/entities/School"
import IFindAllSchoolsInCityDTO from '@modules/schools/dtos/IFindAllSchoolsInCityDTO'

@injectable()
class FindAllSchoolsInCityService{
    constructor(
        @inject('SchoolRepository')
        private schoolRepository: ISchoolRepository
    ){}

    public async execute({city, state}: IFindAllSchoolsInCityDTO): Promise<School[]>{
        const schools = this.schoolRepository.findAllSchoolInCity({city, state})
        return schools
    }
}

export default FindAllSchoolsInCityService