import {uuid} from 'uuidv4'

import Address from "@modules/addresses/infra/typeorm/entities/Address"
import ISchoolRepository from '../ISchoolRepository'
import ICreateSchoolDTO from '@modules/schools/dtos/ICreateSchoolDTO'
import School from '@modules/schools/infra/typeorm/entities/School'
import IFindAllSchoolsInCityDTO from '@modules/schools/dtos/IFindAllSchoolsInCityDTO'

export default class FakeSchoolRepository implements ISchoolRepository {
    private schools: School[] = []
    
    public async create({name, address}: ICreateSchoolDTO): Promise<School>{
        const school = new School()
        school.id = uuid()
        school.name = name
        

        if(address){
        const schoolAdress = new Address()
        schoolAdress.id = uuid()
        schoolAdress.zipcode = address.zipcode
        schoolAdress.public_place = address.public_place
        schoolAdress.number = address.number
        schoolAdress.city = address.city
        schoolAdress.state = address.state

        school.address = schoolAdress

        }

        this.schools.push(school)
        return school
        
        

    }

    public async findById(school_id: string): Promise<School | undefined>{
        const school = this.schools.find(school=> school.id === school_id)
        return school
    }

    public async findByName(name: string): Promise<School | undefined>{
        const school = this.schools.find(school=> school.name ===name)
        return school
    }

    public async findAllSchoolInCity({city, state}:IFindAllSchoolsInCityDTO): Promise<School[]>{
        const schools = this.schools.filter(school=> school.address.city === city && school.address.state ===state)
        return schools
    }

}