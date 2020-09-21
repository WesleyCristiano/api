import { inject, injectable } from "tsyringe";
import IAddressRepository from "@modules/addresses/repositories/IAdrressRepository";
import ICreateSchoolDTO from "../dtos/ICreateSchoolDTO";
import School from "../infra/typeorm/entities/School";
import ISchoolRepository from "../repositories/ISchoolRepository";
import AppError from "@shared/erros/AppError";

@injectable()
class CreateSchoolService {
    constructor(
        @inject('SchoolRepository')
        private schoolRepository: ISchoolRepository,
        @inject('AddressRepository')
        private addressRepository: IAddressRepository
    ){}

    public async execute({name,address}: ICreateSchoolDTO): Promise<School>{

        const existsSchool = await this.schoolRepository.findByName(name)

        if(existsSchool){
            throw new AppError('Already exists an school with this name')
        }
        if(!address){
            throw new AppError('The school must be a valid address')
        }

        const schoolAddress = this.addressRepository.create({
            zipcode: address.zipcode,
            public_place: address.public_place,
            number: address.number,
            city: address.city,
            state: address.state,
            complement: address.complement,
            reference_point: address.reference_point
            
        })

        const school = await this.schoolRepository.create({
            name, address
        })
        return school
    }
}

export default CreateSchoolService