interface BillApiResponse {
    id : number,
    description : string,
    amount : {
        amount :number,
        currency : Currency
    },
    date : string,
    category : BillCategoryApiResponse,
    payer : UserApiResponse,
    participants : UserApiResponse[],
    group : GroupApiResponse,
}