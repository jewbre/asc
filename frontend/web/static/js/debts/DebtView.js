var DebtView = (function () {
    function DebtView(presenter) {
        this.presenter = null;
        this.me = null;
        this.groupMembers = [];
        this.presenter = presenter;
        this.presenter.setDebtView(this);
        this.presenter.updateDebts();
        this.initListeners();
    }
    DebtView.prototype.initListeners = function () {
        var _this = this;
        $('#clearDebtBtn').on('click', function () {
            _this.clearDebts();
        });
    };
    DebtView.prototype.hideClearDebtsPopup = function () {
        $('#clearDebts').modal('close');
    };
    DebtView.prototype.clearDebts = function () {
        this.presenter.clearDebts($('#debters').val());
    };
    DebtView.prototype.setGroupMembers = function (groupMembers) {
        this.groupMembers = groupMembers;
        this.renderDebtCleaning();
    };
    DebtView.prototype.clearFromGroup = function (user) {
        this.me = user;
        this.renderDebtCleaning();
    };
    DebtView.prototype.renderDebtCleaning = function () {
        var _this = this;
        var renderer = new Renderer();
        var debters = $('#debters');
        debters.html('');
        debters.val('');
        for (var _i = 0, _a = this.groupMembers.filter(function (m) { return _this.me === null || m.id != _this.me.id; }); _i < _a.length; _i++) {
            var member = _a[_i];
            var prtcpt = renderer.getRenderedSelectUserItem(member);
            $(prtcpt).appendTo(debters);
        }
        debters.material_select();
    };
    DebtView.prototype.displayDebts = function (debts) {
        var _this = this;
        var debtList = $('#debt-list');
        debtList.html('');
        debts.every(function (debt) {
            _this.renderDebt(debt).appendTo(debtList);
            return true;
        });
        var mine = debts.reduce(function (acc, debt) { return acc + debt.amount; }, 0);
        var debtMessageText = 'Congrats, you are completely even with everybody. :)';
        var debtMessageHolder = $('#debt-message');
        var debtMessage = debtMessageHolder.find('h5');
        debtMessageHolder.removeClass('red-text');
        debtMessageHolder.removeClass('green-text');
        if (mine > 0) {
            debtMessageHolder.addClass('green-text');
            debtMessageText = "You should get " + mine + " kn.";
        }
        else if (mine < 0) {
            debtMessageHolder.addClass('red-text');
            debtMessageText = "You need to give away " + mine + " kn.";
        }
        debtMessage.text(debtMessageText);
    };
    DebtView.prototype.renderDebt = function (debt) {
        var renderer = new Renderer();
        var d = $(renderer.getRenderedDebt(debt));
        return d;
    };
    return DebtView;
}());
