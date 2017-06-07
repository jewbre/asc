var BudgetView = (function () {
    function BudgetView(presenter) {
        this.budget = null;
        this.presenter = presenter;
        this.presenter.setBudgetView(this);
        this.initListeners();
        this.presenter.updateBudget();
    }
    BudgetView.prototype.initListeners = function () {
        var _this = this;
        $('#newAmount').on('change', function () {
            _this.displayBudget(_this.budget);
        });
        $('#addBudgetBtn').on('click', function () {
            _this.addToBudget();
        });
    };
    BudgetView.prototype.addToBudget = function () {
        this.presenter.addToBudget(this.getCurrentInputValue());
    };
    BudgetView.prototype.getCurrentInputValue = function () {
        return parseInt($('#newAmount').val());
    };
    BudgetView.prototype.displayBudget = function (budget) {
        this.budget = budget;
        var budgetAmount = parseFloat(budget.amount + '').toFixed(2);
        $('#budget-amount,#currentBudgetAmount').text(budgetAmount + " " + budget.currency.shortcode);
        $('#newBudgetAmount').text(budgetAmount + this.getCurrentInputValue() + " " + budget.currency.shortcode);
    };
    BudgetView.prototype.showAddToBudgetModal = function () {
        $('#addToBudget').modal('open');
    };
    BudgetView.prototype.hideAddToBudgetModal = function () {
        $('#addToBudget').modal('close');
    };
    return BudgetView;
}());
