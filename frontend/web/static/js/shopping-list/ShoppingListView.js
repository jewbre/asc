var ShoppingListView = (function () {
    function ShoppingListView(presenter) {
        this.presenter = null;
        this.presenter = presenter;
        presenter.view = this;
        this.initListeners();
    }
    ShoppingListView.prototype.initListeners = function () {
        var _this = this;
        $('#addNewShoppingListForm').on('submit', function (event) {
            event.stopPropagation();
            event.preventDefault();
            _this.onAddNewShoppingList();
        });
        $('#addNewShoppingListCreateBtn').on('click', function () {
            _this.onAddNewShoppingList();
        });
    };
    ShoppingListView.prototype.onAddNewShoppingList = function () {
        this.presenter.createNewShoppingList($('#shopping_list_name').text());
    };
    ShoppingListView.prototype.closeAddNewModal = function () {
        $('#addNewShoppingListModal').modal('close');
    };
    return ShoppingListView;
}());
