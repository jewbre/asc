class ShoppingListPresenter {

    private _view : ShoppingListView  = null;

    constructor() {
        ApiService.getInstance().getShoppingListItems()
            .then((items : Item[]) => {
                this.view.setItems(items);
            });

        ApiService.getInstance().getShoppingCategories()
            .then((categories : Category[]) => {
                this.view.setCategories(categories);
            });

    }

    public finishShopping(items : Item[]) {
        ApiService.getInstance()
            .finishShopping(items)
            .then((items : Item[]) => {
                this.view.setItems(items);
                this.view.showAddingScreen();
            })
    }

    public createNewShoppingItem(name : string, category : string|number, reminder : string) {
        ApiService.getInstance()
            .createNewShoppingItem(name, category, reminder)
            .then((item : Item) => {
                this.view.addItem(item);
                this.view.closeAddNewModal();
            })
    }

    public updateShoppingItem(id : number, name: string, category: string | number, details: string) {
        ApiService.getInstance()
            .updateShoppingItem(id, name, category, details)
            .then((item : Item) => {
                this.view.updateItem(item);
                this.view.closeAddNewModal();
            });
    }

    public checkItem(id : number) {
        ApiService.getInstance()
            .checkShoppingItem(id)
            .then((item : Item) => {
                this.view.updateItem(item);
            })
    }

    public uncheckItem(id : number) {
        ApiService.getInstance()
            .uncheckShoppingItem(id)
            .then((item : Item) => {
                this.view.updateItem(item);
            })
    }

    set view(value: ShoppingListView) {
        this._view = value;
    }

    get view(): ShoppingListView {
        return this._view;
    }
}