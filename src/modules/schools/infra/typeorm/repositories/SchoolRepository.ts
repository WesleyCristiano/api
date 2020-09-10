import ISchoolRepository from "@modules/schools/repositories/ISchoolRepository";
import ICreateSchoolDTO from "@modules/schools/dtos/ICreateSchoolDTO";
import School from "../entities/School";
import { Repository, getRepository } from "typeorm";

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
}

export default SchoolRepository