var ShoppingListPresenter = (function () {
    function ShoppingListPresenter() {
        var _this = this;
        this._view = null;
        ApiService.getInstance().getShoppingListItems()
            .then(function (items) {
            _this.view.setItems(items);
        });
        ApiService.getInstance().getShoppingCategories()
            .then(function (categories) {
            _this.view.setCategories(categories);
        });
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.addEventListener('message', function (event) {
                console.log('New message');
                var data = JSON.parse(event.data);
                console.log(data);
                switch (data.type) {
                    case 'item-select':
                        console.log("Selecting item");
                        _this.view.selectItem(data.payload);
                        break;
                    case 'item-unselect':
                        console.log("Unselecting item");
                        _this.view.unselectItem(data.payload);
                        break;
                }
            });
        }
    }
    ShoppingListPresenter.prototype.finishShopping = function (items) {
        var _this = this;
        ApiService.getInstance()
            .finishShopping(items)
            .then(function (items) {
            _this.view.setItems(items);
            _this.view.showAddingScreen();
            _this.view.showReceiptModal();
        });
    };
    ShoppingListPresenter.prototype.createNewShoppingItem = function (name, category, reminder) {
        var _this = this;
        ApiService.getInstance()
            .createNewShoppingItem(name, category, reminder)
            .then(function (item) {
            _this.view.addItem(item);
            _this.view.closeAddNewModal();
        });
    };
    ShoppingListPresenter.prototype.updateShoppingItem = function (id, name, category, details) {
        var _this = this;
        ApiService.getInstance()
            .updateShoppingItem(id, name, category, details)
            .then(function (item) {
            _this.view.updateItem(item);
            _this.view.closeAddNewModal();
        });
    };
    ShoppingListPresenter.prototype.checkItem = function (id) {
        var _this = this;
        ApiService.getInstance()
            .checkShoppingItem(id)
            .then(function (item) {
            _this.view.updateItem(item);
        });
    };
    ShoppingListPresenter.prototype.uncheckItem = function (id) {
        var _this = this;
        ApiService.getInstance()
            .uncheckShoppingItem(id)
            .then(function (item) {
            _this.view.updateItem(item);
        });
    };
    ShoppingListPresenter.prototype.deleteItem = function (id) {
        var _this = this;
        ApiService.getInstance()
            .deleteShoppingItem(id)
            .then(function () {
            _this.view.removeItem(id);
        });
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
