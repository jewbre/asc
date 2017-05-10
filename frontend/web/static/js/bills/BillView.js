var BillView = (function () {
    function BillView(presenter) {
        this.bills = [];
        this.members = [];
        this.selectedPayer = null;
        this.editableBill = null;
        this.presenter = presenter;
        this.presenter.setBillView(this);
        this.initListeners();
        this.presenter.getNextBillsPage();
        this.presenter.getBillCategories();
        this.presenter.getGroupMembers();
        this.presenter.getMe();
    }
    BillView.prototype.initListeners = function () {
        var _this = this;
        $('#createNewExpenseNavbar').on('click', function () {
            $('#createNewExpense').addClass('adding');
            _this.setSelectedPayer(_this.selectedPayer);
        });
        $('#loadMoreBills').on('click', function () {
            _this.presenter.getNextBillsPage();
        });
        $('#showAddNewCategory').on('click', function () {
            $('#categoryNameInput').show();
            $('#categoryNameSelect').hide();
        });
        $('#cancelAddNewCategory').on('click', function () {
            $('#categoryNameInput').hide();
            $('#categoryNameSelect').show();
        });
        $('#addNewCategory').on('click', function () {
            $('#categoryNameInput').hide();
            $('#categoryNameSelect').show();
            var category = new BillCategory();
            var billCategoryName = $('#bill_category_name');
            category.id = billCategoryName.val();
            category.name = billCategoryName.val();
            _this.addCategory(category);
            var billCategory = $('#bill_category');
            billCategory.val(billCategoryName.val());
            billCategory.material_select();
        });
        $('#bill_payer').on('change', function (e) {
            var selectedPayer = $(e.target).val();
            _this.renderFilteredParticipants(selectedPayer);
        });
        $('#createBillBtn').on('click', function () {
            _this.createNewBill();
        });
        $('#updateBillBtn').on('click', function () {
            _this.updateBill();
        });
    };
    BillView.prototype.hideAddNewBillModal = function () {
        $('#createNewExpense').modal('close');
    };
    BillView.prototype.renderFilteredParticipants = function (selectedPlayerID) {
        this.renderParticipants(this.members.filter(function (member) { return member.id != selectedPlayerID; }));
    };
    BillView.prototype.setSelectedPayer = function (member) {
        this.selectedPayer = member;
        var payer = $('#bill_payer');
        payer.val(member.id);
        payer.material_select();
        this.renderFilteredParticipants(member.id);
    };
    BillView.prototype.renderParticipants = function (members) {
        var renderer = new Renderer();
        var participants = $('#bill_participants');
        participants.html('');
        for (var _i = 0, members_1 = members; _i < members_1.length; _i++) {
            var member = members_1[_i];
            var prtcpt = renderer.getRenderedSelectUserItem(member);
            $(prtcpt).appendTo(participants);
        }
        participants.material_select();
    };
    BillView.prototype.renderPayers = function (members) {
        var renderer = new Renderer();
        var payer = $('#bill_payer');
        payer.html('');
        for (var _i = 0, members_2 = members; _i < members_2.length; _i++) {
            var member = members_2[_i];
            var pyr = renderer.getRenderedSelectUserItem(member);
            $(pyr).appendTo(payer);
        }
        payer.material_select();
    };
    BillView.prototype.setGroupMembers = function (members) {
        this.members = members;
        this.renderPayers(members);
        this.renderParticipants(members);
    };
    BillView.prototype.setCategories = function (categories) {
        $('#bill_category').html('');
        this.addCategories(categories);
    };
    BillView.prototype.addCategories = function (categories) {
        for (var _i = 0, categories_1 = categories; _i < categories_1.length; _i++) {
            var category = categories_1[_i];
            this.addCategory(category);
        }
        if (categories.length > 0) {
            $('#bill_category').val(categories[0].id);
        }
        $('#bill_category').material_select();
    };
    BillView.prototype.addCategory = function (category) {
        var renderer = new Renderer();
        var categorySelect = $('#bill_category');
        $(renderer.getRenderedSelectBillCategoryItem(category))
            .appendTo(categorySelect);
        categorySelect.material_select();
    };
    BillView.prototype.setBills = function (bills) {
        $('#billsHolder').html('');
        this.bills = [];
        this.addBills(bills);
    };
    BillView.prototype.addBills = function (bills) {
        bills.sort(function (a, b) {
            return a.date > b.date ? -1 : 1;
        });
        for (var _i = 0, bills_1 = bills; _i < bills_1.length; _i++) {
            var bill = bills_1[_i];
            this.addBill(bill);
        }
    };
    BillView.prototype.addBill = function (bill) {
        this.bills.push(bill);
        this.renderCategories();
        var categoryHolder = $("ul[data-category=\"" + bill.getFormatedDate() + "\"]");
        this.renderBill(bill).appendTo(categoryHolder);
    };
    BillView.prototype.replaceBill = function (bill) {
        var existingBill = null;
        this.bills = this.bills.map(function (b) {
            if (b.id == bill.id) {
                existingBill = b;
                return bill;
            }
            return b;
        });
        var newBill = this.renderBill(bill);
        var $existingBill = $("#bill-card-" + existingBill.id);
        if (existingBill.getFormatedDate() == bill.getFormatedDate()) {
            $existingBill.replaceWith(newBill);
        }
        else {
            this.setBills(this.bills);
        }
    };
    BillView.prototype.getCategories = function () {
        return this.bills.reduce(function (acc, bill) {
            if (acc.indexOf(bill.getFormatedDate()) === -1) {
                acc.push(bill.getFormatedDate());
            }
            return acc;
        }, []);
    };
    BillView.prototype.renderCategories = function () {
        var renderer = new Renderer();
        for (var _i = 0, _a = this.getCategories(); _i < _a.length; _i++) {
            var category = _a[_i];
            var categoryHolder = $("ul[data-category=\"" + category + "\"]");
            if (categoryHolder.length == 0) {
                categoryHolder = $(renderer.getRenderedBillsCategory(category));
                categoryHolder.appendTo($('#billsHolder'));
            }
        }
    };
    BillView.prototype.renderBill = function (bill) {
        var _this = this;
        var renderer = new Renderer();
        var renderedItem = $(renderer.getRenderedBillCard(bill));
        renderedItem.on('click', function () {
            _this.onEditBill(bill);
        });
        return renderedItem;
    };
    BillView.prototype.onEditBill = function (bill) {
        this.editableBill = bill;
        $('#categoryNameSelect').val(bill.category.id);
        $('#bill_amount').val(bill.amount);
        $('#bill_description').val(bill.description);
        $('#bill_date').val(bill.getSelectFormatedDate());
        var billPayer = $('#bill_payer');
        billPayer.val(bill.payer.id);
        billPayer.material_select();
        var billParticipants = $('#bill_participants');
        var participantValue = bill.participants.reduce(function (acc, p) {
            acc.push(p.id);
            return acc;
        }, []);
        billParticipants.val(participantValue);
        billParticipants.material_select();
        var createNewExpenseModal = $('#createNewExpense');
        createNewExpenseModal.removeClass('adding');
        createNewExpenseModal.modal('open');
        Materialize.updateTextFields();
    };
    BillView.prototype.createNewBill = function () {
        var d = new Date($('#bill_date').val());
        this.presenter.createNewBill($('#bill_category').val(), $('#bill_amount').val(), $('#bill_description').val(), d.toISOString(), $('#bill_payer').val(), $('#bill_participants').val());
    };
    BillView.prototype.updateBill = function () {
        var d = new Date($('#bill_date').val());
        this.presenter.updateBill(this.editableBill.id, $('#bill_category').val(), $('#bill_amount').val(), $('#bill_description').val(), d.toISOString(), $('#bill_payer').val(), $('#bill_participants').val());
    };
    return BillView;
}());
