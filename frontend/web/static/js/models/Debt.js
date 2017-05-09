var Debt = (function () {
    function Debt() {
    }
    Object.defineProperty(Debt.prototype, "amount", {
        get: function () {
            return this._amount;
        },
        set: function (value) {
            this._amount = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Debt.prototype, "user", {
        get: function () {
            return this._user;
        },
        set: function (value) {
            this._user = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Debt.prototype, "currency", {
        get: function () {
            return this._currency;
        },
        set: function (value) {
            this._currency = value;
        },
        enumerable: true,
        configurable: true
    });
    return Debt;
}());
