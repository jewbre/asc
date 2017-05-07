var Group = (function () {
    function Group() {
    }
    Object.defineProperty(Group.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Group.prototype, "members", {
        get: function () {
            return this._members;
        },
        set: function (value) {
            this._members = value;
        },
        enumerable: true,
        configurable: true
    });
    return Group;
}());
