var Item = (function () {
    function Item() {
    }
    Object.defineProperty(Item.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "category", {
        get: function () {
            return this._category;
        },
        set: function (value) {
            this._category = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "details", {
        get: function () {
            return this._details;
        },
        set: function (value) {
            this._details = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "isChecked", {
        get: function () {
            return this._isChecked;
        },
        set: function (value) {
            this._isChecked = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "isBought", {
        get: function () {
            return this._isBought;
        },
        set: function (value) {
            this._isBought = value;
        },
        enumerable: true,
        configurable: true
    });
    return Item;
}());
