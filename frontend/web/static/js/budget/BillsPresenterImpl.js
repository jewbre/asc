var BillsPresenterImpl = (function () {
    function BillsPresenterImpl() {
        this.page = 1;
    }
    BillsPresenterImpl.prototype.setBillView = function (view) {
        this.billView = view;
    };
    BillsPresenterImpl.prototype.setBudgetView = function (view) {
        this.budgetView = view;
    };
    BillsPresenterImpl.prototype.setDebtView = function (view) {
        this.debtView = view;
    };
    BillsPresenterImpl.prototype.updateBudget = function () {
        var _this = this;
        ApiService.getInstance()
            .getMineBudget()
            .then(function (budget) {
            _this.budgetView.displayBudget(budget);
        });
    };
    BillsPresenterImpl.prototype.updateDebts = function () {
        var _this = this;
        ApiService.getInstance()
            .getDebts()
            .then(function (debts) {
            _this.debtView.displayDebts(debts);
        });
    };
    BillsPresenterImpl.prototype.clearDebts = function (users) {
        var _this = this;
        ApiService.getInstance()
            .clearDebts(users)
            .then(function (debts) {
            _this.debtView.displayDebts(debts);
            _this.debtView.hideClearDebtsPopup();
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
    BillsPresenterImpl.prototype.getBillCategories = function () {
        var _this = this;
        ApiService.getInstance()
            .getBillCategories()
            .then(function (categories) {
            _this.billView.setCategories(categories);
        });
    };
    BillsPresenterImpl.prototype.getMe = function () {
        var _this = this;
        ApiService.getInstance()
            .getMe()
            .then(function (user) {
            _this.billView.setSelectedPayer(user);
            _this.debtView.clearFromGroup(user);
        });
    };
    BillsPresenterImpl.prototype.getGroupMembers = function () {
        var _this = this;
        ApiService.getInstance().getGroupMembers()
            .then(function (members) {
            _this.billView.setGroupMembers(members);
            _this.debtView.setGroupMembers(members);
        });
    };
    BillsPresenterImpl.prototype.createNewBill = function (category, amount, description, date, payer, participants) {
        var _this = this;
        ApiService.getInstance().createNewBill(category, amount, description, date, payer, participants)
            .then(function (bill) {
            _this.billView.addBill(bill);
            _this.billView.hideAddNewBillModal();
            _this.updateDebts();
            _this.updateBudget();
        });
    };
    BillsPresenterImpl.prototype.updateBill = function (id, category, amount, description, date, payer, participants) {
        var _this = this;
        ApiService.getInstance().updateBill(id, category, amount, description, date, payer, participants)
            .then(function (bill) {
            _this.billView.replaceBill(bill);
            _this.billView.hideAddNewBillModal();
            _this.updateDebts();
            _this.updateBudget();
        });
    };
    BillsPresenterImpl.prototype.getNextBillsPage = function () {
        var _this = this;
        ApiService.getInstance()
            .getBills(this.page)
            .then(function (_a) {
            var bills = _a.bills, pagination = _a.pagination;
            _this.page++;
            if (pagination.totalPages < _this.page) {
                $('#loadMoreBills').remove();
            }
            _this.billView.addBills(bills);
        });
    };
    return BillsPresenterImpl;
}());
