export default interface ICreateAddressDTO{
    zipcode: string;
    public_place:string;
    number:string;
    complement?:string;
    reference_point?:string;
    city: string;
    state: string;
}
