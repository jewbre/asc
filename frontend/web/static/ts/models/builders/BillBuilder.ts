class BillBuilder {

    private bill: Bill = null;

    constructor() {
        this.bill = new Bill();
    }

    public setId(value: number) {
        this.bill.id = value;
        return this;
    }

    public setDescription(value: string) {
        this.bill.description = value;
        return this;
    }

    public setCategory(value: BillCategory) {
        this.bill.category = value;
        return this;
    }

    public setAmount(value: number) {
        this.bill.amount = value;
        return this;
    }

    public setDate(value: string) {
        this.bill.date = value;
        return this;
    }

    public setPayer(value: User) {
        this.bill.payer = value;
        return this;
    }

    public setParticipants(value: User[]) {
        this.bill.participants = value;
        return this;
    }

    public setGroup(value: Group) {
        this.bill.group = value;
        return this;
    }

    public build(): Bill {
        const currentBill = this.bill;
        this.bill = new Bill();
        return currentBill;
    }

    public buildFromApiResponse(apiResponse: BillApiResponse): Bill {
        const tmpBill = this.build();

        const newBill = this.setId(apiResponse.id)
            .setDescription(apiResponse.description)
            .setDate(apiResponse.date)
            .setCategory((new BillCategoryBuilder()).buildFromApiResponse(apiResponse.category))
            .setPayer((new UserBuilder()).buildFromApiResponse(apiResponse.payer))
            .setParticipants(
                apiResponse.participants.map(
                    (userApiResponse : UserApiResponse) =>
                        (new UserBuilder()).buildFromApiResponse(userApiResponse))
            )
            .setAmount(apiResponse.amount.amount)
            .setGroup((new GroupBuilder()).buildFromApiResponse(apiResponse.group))
            .build();

        this.bill = tmpBill;

        return newBill;
    }
}