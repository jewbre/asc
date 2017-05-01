class ShoppingListView {

    private presenter : ShoppingListPresenter = null;

    constructor(presenter: ShoppingListPresenter) {
        this.presenter = presenter;
        presenter.view = this;

        this.initListeners();
    }

    private initListeners() : void {
        $('#addNewShoppingListForm').on('submit', (event) => {
            event.stopPropagation();
            event.preventDefault();

            this.onAddNewShoppingList();
        });

        $('#addNewShoppingListCreateBtn').on('click', () => {
            this.onAddNewShoppingList();
        })
    }

    private onAddNewShoppingList() : void {
        this.presenter.createNewShoppingList(
            $('#shopping_list_name').text()
        );
    }

    public closeAddNewModal() : void {
        $('#addNewShoppingListModal').modal('close');
    }
}