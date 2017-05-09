class DebtBuilder {

    private debt : Debt = null;

    constructor() {
        this.debt = new Debt();
    }

    public setAmount(value: number) {
        this.debt.amount = value;
        return this;
    }

    public setUser(value: User) {
        this.debt.user = value;
        return this;
    }

    public setCurrency(value: Currency) {
        this.debt.currency = value;
        return this;
    }

    public build() : Debt {
        const currentDebt = this.debt;
        this.debt = new Debt();
        return currentDebt;
    }

    public buildFromApiResponse(apiResponse : DebtApiResponse ) : Debt {
        const tmpDebt = this.build();

        const newDebt = this
            .setAmount(apiResponse.amount)
            .setUser((new UserBuilder()).buildFromApiResponse(apiResponse.user))
            .setCurrency(apiResponse.currency)
            .build();

        this.debt = tmpDebt;

        return newDebt;
    }
}