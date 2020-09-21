interface IRequest{
    order_number: number
}
export const byOrderNumber = (a:IRequest, b:IRequest) => {
    return a.order_number - b.order_number
}