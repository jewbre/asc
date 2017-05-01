var ShoppingListPresenter = (function () {
    function ShoppingListPresenter() {
        this._view = null;
    }
    ShoppingListPresenter.prototype.createNewShoppingList = function (name) {
        // TODO: create new shopping list
        var _this = this;
        // ApiService.getInstance().createNewShoppingList(name).then((/* display that new list*/))
        setTimeout(function () { return _this.view.closeAddNewModal(); }, 2000);
    };
    Object.defineProperty(ShoppingListPresenter.prototype, "view", {
        get: function () {
            return this._view;
        },
        set: function (value) {
            this._view = value;
        },
        enumerable: true,
        configurable: true
    });
    return ShoppingListPresenter;
}());
