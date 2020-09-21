import ISchoolRepository from "@modules/schools/repositories/ISchoolRepository";
import ICreateSchoolDTO from "@modules/schools/dtos/ICreateSchoolDTO";
import School from "../entities/School";
import { Repository, getRepository } from "typeorm";
import IFindAllSchoolsInCityDTO from "@modules/schools/dtos/IFindAllSchoolsInCityDTO";

class SchoolRepository implements ISchoolRepository{
    private ormRepository: Repository<School>
    constructor(){
        this.ormRepository = getRepository(School)
    }
    public async create({name, address}:ICreateSchoolDTO): Promise<School>{
        const school = this.ormRepository.create({name, address})
        await this.ormRepository.save(school)
        return school
    }

    public async findById(school_id: string): Promise<School | undefined>{
        const school = await this.ormRepository.findOne({
            where: {id: school_id}
        })
        return school
    }

    public async findByName(name: string): Promise<School | undefined>{
        const school = await this.ormRepository.findOne({
            where: {
                name
            }
        })
        return school
    }
    
    public async findAllSchoolInCity({city, state}:IFindAllSchoolsInCityDTO): Promise<School[]>{
        const schools = await this.ormRepository.createQueryBuilder('school')
            .leftJoinAndSelect('school.address', 'address')
            .where('address.city = :city', {city})
            .andWhere('address.state = :state', {state}).getMany()
        return schools
    }
}

export default SchoolRepository