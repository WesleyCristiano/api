import ICreateAddressDTO from "@modules/addresses/dtos/ICreateAddressDTO";

export default interface ICreateSchoolDTO{
    name: string;
    address?: ICreateAddressDTO
}