interface DebtApiResponse {
    debt : {
        amount : number,
        currency : Currency
    }
    user : UserApiResponse;
}