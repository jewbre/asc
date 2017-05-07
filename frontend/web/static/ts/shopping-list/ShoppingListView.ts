class ShoppingListView {
    private static readonly SELECT_ITEM_BOX_HEIGHT = 84;
    private editableItem : Item = null;

    private items : Item[] = [];

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

            this.onAddNewShoppingItem();
        });

        $('#addNewShoppingItemCreateBtn').on('click', () => {
            this.onAddNewShoppingItem();
        });

        $('#editShoppingItemBtn').on('click', () => {
            this.onEditShoppingItem();
        });

        $('#addNewItemTrigger').on('click', () =>{
            const modal = $('#addNewShoppingListModal');
            modal.addClass('create').removeClass('edit');
        });

        $('#renderShoppingList').on('click', () => {
            this.renderShoppingList();
        });

        $('#goToShopping').on('click', () => {
            this.showShoppingScreen();
        });

        $('#goToCreation').on('click', () => {
            this.showAddingScreen();
        });

        $('#finishShopping').on('click', () => {
            this.finishShopping();
        });

        $('ul.tabs').tabs({
            swipeable : true
        });


        $('#showAddNewCategory').on('click', () => {
            $('#categoryNameSelect').hide();
            $('#categoryNameInput').show();
        });

        $('#cancelAddNewCategory').on('click', () => {
            $('#categoryNameSelect').show();
            $('#categoryNameInput').hide();
        });

        $('#addNewCategory').on('click', () => {
            const cat = new Category();
            const shoppingCategoryName = $('#shopping_category_name');
            cat.id = shoppingCategoryName.val();
            cat.name = shoppingCategoryName.val();
            this.addCategory(cat);

            const shoppingItemCategory = $('#shopping_item_category');
            shoppingItemCategory.val(cat.id);
            shoppingItemCategory.material_select();

            $('#categoryNameSelect').show();
            $('#categoryNameInput').hide();
        })
    }

    public showAddingScreen() {
        $('ul.tabs').tabs('select_tab', 'tab1');
        $('#shoppingListDropdown').removeClass('shopping');
    }

    public showShoppingScreen() {
        this.renderShoppingList();
        $('ul.tabs').tabs('select_tab', 'tab2');
        $('#shoppingListDropdown').addClass('shopping');
    }

    public finishShopping() {
        this.presenter.finishShopping(this.items);
    }


    private getShoppingItems() : Item[] {
        const items : Item[] = this.items.filter((item : Item) => item.isChecked);
        this.sortShoppingItems(items);
        return items;
    }

    private sortShoppingItems(items : Item[]) {
        items.sort((a : Item,b : Item) =>{
            if(a.isBought == b.isBought) {
                return a.name < b.name ? 1 : -1;
            }

            return a.isBought ? 1 : -1;
        });
    }

    public renderShoppingList() {
        const items = this.getShoppingItems();

        const shoppingListHolder = $('#shoppingListHolder');
        shoppingListHolder.html('');
        const renderer = new Renderer();
        let counter = 0;
        for(const item of items) {
            const shoppingItem = $(renderer.getRenderedShoppingItem(item));
            shoppingItem.on('click', () => {
                if(shoppingItem.hasClass('checked')) {
                    item.isBought = false;
                    shoppingItem.removeClass('checked');
                } else {
                    item.isBought = true;
                    shoppingItem.addClass('checked');
                }
                this.resortItems(items);
            });

            shoppingItem.appendTo(shoppingListHolder);
            shoppingItem.css('top', `${counter++ * ShoppingListView.SELECT_ITEM_BOX_HEIGHT}px`);
        }
        shoppingListHolder.css('height', `${counter++ * ShoppingListView.SELECT_ITEM_BOX_HEIGHT}px`);
    }

    private resortItems(items : Item[]) : void {
        this.sortShoppingItems(items);
        let counter = 0;
        for(const item of items) {
            const shoppingItem = $(`#shopping-item-${item.id}`);
            shoppingItem.css('top', `${counter++ * ShoppingListView.SELECT_ITEM_BOX_HEIGHT }px`);
        }
    }


    public setItems(items : Item[]) : void {
        this.items = [];
        $('#itemsHolder').html('');
        this.addItems(items);
    }

    public addItems(items : Item[]) : void {
        for(const item of items) {
            this.addItem(item);
        }
    }

    public addItem(item : Item) {
        this.items.push(item);
        this.renderItem(item).appendTo(
            $(`ul[data-category="${item.category.name}"]`)
        );
    }

    public updateItem(item : Item) {
        let inSameCategory = true;
        let oldCategoryName = '';
        this.items = this.items.map((i) => {
            if(i.id == item.id) {
                inSameCategory = i.category.id == item.category.id;
                oldCategoryName = i.category.name;
                return item;
            }
            return i;
        });

        const existingItem = $(`li[data-id="${item.id}"]`);

        if(inSameCategory) {
            existingItem.replaceWith(
                this.renderItem(item)
            );
        } else {
            existingItem.remove();
            const oldCategoryHolder = $(`ul[data-category="${oldCategoryName}"]`);
            this.renderItem(item).appendTo(
                $(`ul[data-category="${item.category.name}"]`)
            );

            if(oldCategoryHolder.children().length <= 1) {
                oldCategoryHolder.remove();
            }

        }


        this.editableItem = null;
    }

    private renderItem(item : Item) : JQuery {
        const renderer = new Renderer();
        let categoryHolder = $(`ul[data-category="${item.category.name}"]`);

        if(categoryHolder.length == 0) {
            categoryHolder = $(renderer.getRenderedCategory(item.category));
            categoryHolder.appendTo($('#itemsHolder'));
        }

        const renderedItem = $(renderer.getRenderedItem(item));

        renderedItem.find('input[type="checkbox"]').on('change', (e) => {
            item.isChecked = (<HTMLInputElement>(e.target)).checked;
            if(item.isChecked) {
                this.presenter.checkItem(item.id);
            } else {
                this.presenter.uncheckItem(item.id);
            }

            this.renderShoppingList();
        });

        renderedItem.find('.modal-trigger').on('click', () => {
            this.onEditItem(item);
        });
        return renderedItem;
    }

    public setCategories(categories : Category[]) {
        $('#shopping_item_category').html('');
        if(categories.length > 0) {
            $('#shopping_item_category').val(categories[0].id);
        }

        this.addCategories(categories);

    }

    public addCategories(categories : Category[]) {
        for(const category of categories) {
            this.addCategory(category);
        }
    }

    public addCategory(category : Category) {
        const renderer = new Renderer();
        const categorySelect = $('#shopping_item_category');
        $(renderer.getRenderedSelectCategoryItem(category))
            .appendTo(categorySelect);

        categorySelect.material_select();
    }


    private onEditItem(item : Item) {
        const modal = $('#addNewShoppingListModal');
        modal.addClass('edit').removeClass('create');

        $('#shopping_item_name').val(item.name);
        $('#shopping_item_reminder').text(item.details);
        $('#shopping_item_category').val(item.category.id);
        $('#shopping_item_category').material_select();

        this.editableItem = item;
        Materialize.updateTextFields();
    }

    private onAddNewShoppingItem() : void {
        this.presenter.createNewShoppingItem(
            $('#shopping_item_name').val(),
            $('#shopping_item_category').val(),
            $('#shopping_item_reminder').val(),
        );
    }


    private onEditShoppingItem() : void {
        if(this.editableItem !== null) {
            this.presenter.updateShoppingItem(
                this.editableItem.id,
                $('#shopping_item_name').val(),
                $('#shopping_item_category').val(),
                $('#shopping_item_reminder').val(),
            );
        }

    }

    public closeAddNewModal() : void {
        $('#addNewShoppingListItemForm').modal('close');
    }
}