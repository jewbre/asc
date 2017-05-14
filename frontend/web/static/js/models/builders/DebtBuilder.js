var DebtBuilder = (function () {
    function DebtBuilder() {
        this.debt = null;
        this.debt = new Debt();
    }
    DebtBuilder.prototype.setAmount = function (value) {
        this.debt.amount = value;
        return this;
    };
    DebtBuilder.prototype.setUser = function (value) {
        this.debt.user = value;
        return this;
    };
    DebtBuilder.prototype.setCurrency = function (value) {
        this.debt.currency = value;
        return this;
    };
    DebtBuilder.prototype.build = function () {
        var currentDebt = this.debt;
        this.debt = new Debt();
        return currentDebt;
    };
    DebtBuilder.prototype.buildFromApiResponse = function (apiResponse) {
        var tmpDebt = this.build();
        var newDebt = this
            .setAmount(apiResponse.debt.amount)
            .setUser((new UserBuilder()).buildFromApiResponse(apiResponse.user))
            .setCurrency(apiResponse.debt.currency)
            .build();
        this.debt = tmpDebt;
        return newDebt;
    };
    return DebtBuilder;
}());
