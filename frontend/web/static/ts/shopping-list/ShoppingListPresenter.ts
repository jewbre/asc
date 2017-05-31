class ShoppingListPresenter {

    private _view: ShoppingListView = null;

    constructor() {
        ApiService.getInstance().getShoppingListItems()
            .then((items: Item[]) => {
                this.view.setItems(items);
            });

        ApiService.getInstance().getShoppingCategories()
            .then((categories: Category[]) => {
                this.view.setCategories(categories);
            });

        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.addEventListener('message', (event) => {
                console.log('New message');
                const data: { type: string, payload: number } = JSON.parse(event.data);
                console.log(data);
                switch (data.type) {
                    case 'item-select' :
                        console.log("Selecting item");
                        this.view.selectItem(data.payload);
                        break;
                    case 'item-unselect' :
                        console.log("Unselecting item");
                        this.view.unselectItem(data.payload);
                        break;
                }
            });
        }
    }

    public finishShopping(items: Item[]) {
        ApiService.getInstance()
            .finishShopping(items)
            .then((items: Item[]) => {
                this.view.setItems(items);
                this.view.showAddingScreen();
                this.view.showReceiptModal();
            })
    }

    public createNewShoppingItem(name: string, category: string | number, reminder: string) {
        ApiService.getInstance()
            .createNewShoppingItem(name, category, reminder)
            .then((item: Item) => {
                this.view.addItem(item);
                this.view.closeAddNewModal();
            })
    }

    public updateShoppingItem(id: number, name: string, category: string | number, details: string) {
        ApiService.getInstance()
            .updateShoppingItem(id, name, category, details)
            .then((item: Item) => {
                this.view.updateItem(item);
                this.view.closeAddNewModal();
            });
    }

    public checkItem(id: number) {
        ApiService.getInstance()
            .checkShoppingItem(id)
            .then((item: Item) => {
                this.view.updateItem(item);
            })
    }

    public uncheckItem(id: number) {
        ApiService.getInstance()
            .uncheckShoppingItem(id)
            .then((item: Item) => {
                this.view.updateItem(item);
            })
    }

    public deleteItem(id: number): void {
        ApiService.getInstance()
            .deleteShoppingItem(id)
            .then(() => {
                this.view.removeItem(id);
            })
    }

    set view(value: ShoppingListView) {
        this._view = value;
    }

    get view(): ShoppingListView {
        return this._view;
    }
}