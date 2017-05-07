var Budget = (function () {
    function Budget() {
    }
    Object.defineProperty(Budget.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Budget.prototype, "group", {
        get: function () {
            return this._group;
        },
        set: function (value) {
            this._group = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Budget.prototype, "currency", {
        get: function () {
            return this._currency;
        },
        set: function (value) {
            this._currency = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Budget.prototype, "amount", {
        get: function () {
            return this._amount;
        },
        set: function (value) {
            this._amount = value;
        },
        enumerable: true,
        configurable: true
    });
    return Budget;
}());
