var BillsPresenterImpl = (function () {
    function BillsPresenterImpl() {
    }
    BillsPresenterImpl.prototype.setBillView = function (view) {
        this.billView = view;
    };
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
        });
    };
    BillsPresenterImpl.prototype.getGroupMembers = function () {
        var _this = this;
        ApiService.getInstance().getGroupMembers()
            .then(function (members) {
            _this.billView.setGroupMembers(members);
        });
    };
    BillsPresenterImpl.prototype.createNewBill = function (category, amount, description, date, payer, participants) {
        var _this = this;
        ApiService.getInstance().createNewBill(category, amount, description, date, payer, participants)
            .then(function (bill) {
            _this.billView.addBill(bill);
            _this.billView.hideAddNewBillModal();
        });
    };
    BillsPresenterImpl.prototype.updateBill = function (id, category, amount, description, date, payer, participants) {
        var _this = this;
        ApiService.getInstance().updateBill(id, category, amount, description, date, payer, participants)
            .then(function (bill) {
            _this.billView.replaceBill(bill);
            _this.billView.hideAddNewBillModal();
        });
    };
    BillsPresenterImpl.prototype.getNextBillsPage = function () {
        var _this = this;
        ApiService.getInstance()
            .getBills()
            .then(function (bills) {
            _this.billView.addBills(bills);
        });
    };
    return BillsPresenterImpl;
}());
