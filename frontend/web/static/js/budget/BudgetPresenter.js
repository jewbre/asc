var BudgetPresenter = (function () {
    function BudgetPresenter() {
    }
    BudgetPresenter.prototype.setView = function (view) {
        this.view = view;
    };
    BudgetPresenter.prototype.updateBudget = function () {
        var _this = this;
        ApiService.getInstance()
            .getMineBudget()
            .then(function (budget) {
            _this.view.displayBudget(budget);
        });
    };
    BudgetPresenter.prototype.addToBudget = function (amount) {
        var _this = this;
        ApiService.getInstance()
            .addToBudget(amount)
            .then(function (budget) {
            _this.view.displayBudget(budget);
            _this.view.hideAddToBudgetModal();
        });
    };
    return BudgetPresenter;
}());
