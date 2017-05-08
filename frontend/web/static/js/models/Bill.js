var Bill = (function () {
    function Bill() {
    }
    Object.defineProperty(Bill.prototype, "group", {
        get: function () {
            return this._group;
        },
        set: function (value) {
            this._group = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "date", {
        get: function () {
            return this._date;
        },
        set: function (value) {
            this._date = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "description", {
        get: function () {
            return this._description;
        },
        set: function (value) {
            this._description = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "amount", {
        get: function () {
            return this._amount;
        },
        set: function (value) {
            this._amount = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "category", {
        get: function () {
            return this._category;
        },
        set: function (value) {
            this._category = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "payer", {
        get: function () {
            return this._payer;
        },
        set: function (value) {
            this._payer = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Bill.prototype, "participants", {
        get: function () {
            return this._participants;
        },
        set: function (value) {
            this._participants = value;
        },
        enumerable: true,
        configurable: true
    });
    Bill.prototype.getFormatedDate = function () {
        var d = new Date(this.date);
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return months[d.getMonth()] + " " + d.getFullYear();
    };
    Bill.prototype.getSelectFormatedDate = function () {
        var d = new Date(this.date);
        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return d.getDate() + " " + months[d.getMonth()] + ", " + d.getFullYear();
    };
    return Bill;
}());
