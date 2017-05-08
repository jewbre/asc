var BillsPresenterImpl = (function () {
    function BillsPresenterImpl() {
    }
    BillsPresenterImpl.prototype.setBudgetView = function (view) {
        this.budgetView = view;
    };
    BillsPresenterImpl.prototype.updateBudget = function () {
        var _this = this;
        ApiService.getInstance()
            .getMineBudget()
            .then(function (budget) {
            _this.budgetView.displayBudget(budget);
        });
    };
    BillsPresenterImpl.prototype.addToBudget = function (amount) {
        var _this = this;
        ApiService.getInstance()
            .addToBudget(amount)
            .then(function (budget) {
            _this.budgetView.displayBudget(budget);
            _this.budgetView.hideAddToBudgetModal();
        });
    };
    return BillsPresenterImpl;
}());
