class BudgetBuilder {

    private budget: Budget = null;

    constructor() {
        this.budget = new Budget();
    }

    public setId(value: number) {
        this.budget.id = value;
        return this;
    }

    public setAmount(value: number) {
        this.budget.amount = value;
        return this;
    }

    public setGroup(value: Group) {
        this.budget.group = value;
        return this;
    }

    public setCurrency(value: Currency) {
        this.budget.currency = value;
        return this;
    }

    public build(): Budget {
        const currentBudget = this.budget;
        this.budget = new Budget();
        return currentBudget;
    }

    public buildFromApiResponse(apiResponse: BudgetApiResponse): Budget {
        const tmpBudget = this.build();

        const newBudget = this.setId(apiResponse.id)
            .setAmount(apiResponse.amount)
            .setGroup((new GroupBuilder()).buildFromApiResponse(apiResponse.group))
            .setCurrency(apiResponse.currency)
            .build();

        this.budget = tmpBudget;

        return newBudget;
    }
}