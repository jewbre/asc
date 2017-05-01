class ShoppingListPresenter {

    private _view : ShoppingListView  = null;

    public createNewShoppingList(name : string) {
        // TODO: create new shopping list

        // ApiService.getInstance().createNewShoppingList(name).then((/* display that new list*/))
        setTimeout(() => this.view.closeAddNewModal(), 2000);
    }

    set view(value: ShoppingListView) {
        this._view = value;
    }

    get view(): ShoppingListView {
        return this._view;
    }
}