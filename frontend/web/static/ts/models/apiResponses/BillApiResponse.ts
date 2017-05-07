interface BillApiResponse {
    id : number,
    description : string,
    amount : number,
    date : string,
    category : BillCategoryApiResponse,
    payer : UserApiResponse,
    participants : UserApiResponse[],
    group : GroupApiResponse,
}