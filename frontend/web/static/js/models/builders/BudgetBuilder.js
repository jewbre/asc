var BudgetBuilder = (function () {
    function BudgetBuilder() {
        this.budget = null;
        this.budget = new Budget();
    }
    BudgetBuilder.prototype.setId = function (value) {
        this.budget.id = value;
        return this;
    };
    BudgetBuilder.prototype.setAmount = function (value) {
        this.budget.amount = value;
        return this;
    };
    BudgetBuilder.prototype.setGroup = function (value) {
        this.budget.group = value;
        return this;
    };
    BudgetBuilder.prototype.setCurrency = function (value) {
        this.budget.currency = value;
        return this;
    };
    BudgetBuilder.prototype.build = function () {
        var currentBudget = this.budget;
        this.budget = new Budget();
        return currentBudget;
    };
    BudgetBuilder.prototype.buildFromApiResponse = function (apiResponse) {
        var tmpBudget = this.build();
        var newBudget = this.setId(apiResponse.id)
            .setAmount(apiResponse.amount)
            .setGroup((new GroupBuilder()).buildFromApiResponse(apiResponse.group))
            .setCurrency(apiResponse.currency)
            .build();
        this.budget = tmpBudget;
        return newBudget;
    };
    return BudgetBuilder;
}());
