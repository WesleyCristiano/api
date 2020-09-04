import ICreateAddressDTO from '@modules/addresses/dtos/ICreateAddressDTO'

export default interface ICreateStoreDTO{
    company_name: string;
    logo?:string;
    cnpj: string;
    email: string;
    phone_number: string;
    password: string;
    address: ICreateAddressDTO
}