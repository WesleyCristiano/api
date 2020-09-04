import Address from "../infra/typeorm/entities/Address";
import ICreateAddressDTO from "../dtos/ICreateAddressDTO";

export default interface IAddressRepository{
    create(data: ICreateAddressDTO): Address
}