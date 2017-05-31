var ShoppingListView = (function () {
    function ShoppingListView(presenter) {
        this.editableItem = null;
        this.items = [];
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
            _this.onAddNewShoppingItem();
        });
        $('#addNewShoppingItemCreateBtn').on('click', function () {
            _this.onAddNewShoppingItem();
        });
        $('#editShoppingItemBtn').on('click', function () {
            _this.onEditShoppingItem();
        });
        $('#deleteShoppingItemBtn').on('click', function () {
            _this.onDeleteItem();
        });
        $('#addNewItemTrigger').on('click', function () {
            var modal = $('#addNewShoppingListModal');
            modal.addClass('create').removeClass('edit');
        });
        $('#renderShoppingList').on('click', function () {
            _this.renderShoppingList();
        });
        $('#goToShopping').on('click', function () {
            _this.showShoppingScreen();
        });
        $('#goToCreation').on('click', function () {
            _this.showAddingScreen();
        });
        $('#finishShopping').on('click', function () {
            _this.finishShopping();
        });
        $('ul.tabs').tabs({
            swipeable: true
        });
        $('#showAddNewCategory').on('click', function () {
            $('#categoryNameSelect').hide();
            $('#categoryNameInput').show();
        });
        $('#cancelAddNewCategory').on('click', function () {
            $('#categoryNameSelect').show();
            $('#categoryNameInput').hide();
        });
        $('#addNewCategory').on('click', function () {
            var cat = new Category();
            var shoppingCategoryName = $('#shopping_category_name');
            cat.id = shoppingCategoryName.val();
            cat.name = shoppingCategoryName.val();
            _this.addCategory(cat);
            var shoppingItemCategory = $('#shopping_item_category');
            shoppingItemCategory.val(cat.id);
            shoppingItemCategory.material_select();
            $('#categoryNameSelect').show();
            $('#categoryNameInput').hide();
        });
    };
    ShoppingListView.prototype.showAddingScreen = function () {
        $('ul.tabs').tabs('select_tab', 'tab1');
        $('#shoppingListDropdown').removeClass('shopping');
    };
    ShoppingListView.prototype.showShoppingScreen = function () {
        this.renderShoppingList();
        $('ul.tabs').tabs('select_tab', 'tab2');
        $('#shoppingListDropdown').addClass('shopping');
    };
    ShoppingListView.prototype.finishShopping = function () {
        this.presenter.finishShopping(this.items);
    };
    ShoppingListView.prototype.showReceiptModal = function () {
        $('#createNewExpense').modal('open');
    };
    ShoppingListView.prototype.getShoppingItems = function () {
        var items = this.items.filter(function (item) { return item.isChecked; });
        this.sortShoppingItems(items);
        return items;
    };
    ShoppingListView.prototype.sortShoppingItems = function (items) {
        items.sort(function (a, b) {
            if (a.isBought == b.isBought) {
                return a.name < b.name ? 1 : -1;
            }
            return a.isBought ? 1 : -1;
        });
    };
    ShoppingListView.prototype.renderShoppingList = function () {
        var _this = this;
        var items = this.getShoppingItems();
        var shoppingListHolder = $('#shoppingListHolder');
        shoppingListHolder.html('');
        var renderer = new Renderer();
        var counter = 0;
        var _loop_1 = function (item) {
            var shoppingItem = $(renderer.getRenderedShoppingItem(item));
            shoppingItem.on('click', function () {
                if (shoppingItem.hasClass('checked')) {
                    item.isBought = false;
                    shoppingItem.removeClass('checked');
                }
                else {
                    item.isBought = true;
                    shoppingItem.addClass('checked');
                }
                _this.resortItems(items);
            });
            shoppingItem.appendTo(shoppingListHolder);
            shoppingItem.css('top', counter++ * ShoppingListView.SELECT_ITEM_BOX_HEIGHT + "px");
        };
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            _loop_1(item);
        }
        shoppingListHolder.css('height', counter++ * ShoppingListView.SELECT_ITEM_BOX_HEIGHT + "px");
    };
    ShoppingListView.prototype.resortItems = function (items) {
        this.sortShoppingItems(items);
        var counter = 0;
        for (var _i = 0, items_2 = items; _i < items_2.length; _i++) {
            var item = items_2[_i];
            var shoppingItem = $("#shopping-item-" + item.id);
            shoppingItem.css('top', counter++ * ShoppingListView.SELECT_ITEM_BOX_HEIGHT + "px");
        }
    };
    ShoppingListView.prototype.setItems = function (items) {
        this.items = [];
        $('#itemsHolder').html('');
        this.addItems(items);
    };
    ShoppingListView.prototype.addItems = function (items) {
        for (var _i = 0, items_3 = items; _i < items_3.length; _i++) {
            var item = items_3[_i];
            this.addItem(item);
        }
    };
    ShoppingListView.prototype.addItem = function (item) {
        this.items.push(item);
        this.renderItem(item).appendTo($("ul[data-category=\"" + item.category.name + "\"]"));
    };
    ShoppingListView.prototype.updateItem = function (item) {
        var inSameCategory = true;
        var oldCategoryName = '';
        this.items = this.items.map(function (i) {
            if (i.id == item.id) {
                inSameCategory = i.category.id == item.category.id;
                oldCategoryName = i.category.name;
                return item;
            }
            return i;
        });
        var existingItem = $("li[data-id=\"" + item.id + "\"]");
        if (inSameCategory) {
            existingItem.replaceWith(this.renderItem(item));
        }
        else {
            existingItem.remove();
            var oldCategoryHolder = $("ul[data-category=\"" + oldCategoryName + "\"]");
            this.renderItem(item).appendTo($("ul[data-category=\"" + item.category.name + "\"]"));
            if (oldCategoryHolder.children().length <= 1) {
                oldCategoryHolder.remove();
            }
        }
        this.editableItem = null;
    };
    ShoppingListView.prototype.renderItem = function (item) {
        var _this = this;
        var renderer = new Renderer();
        var categoryHolder = $("ul[data-category=\"" + item.category.name + "\"]");
        if (categoryHolder.length == 0) {
            categoryHolder = $(renderer.getRenderedCategory(item.category));
            categoryHolder.appendTo($('#itemsHolder'));
        }
        var renderedItem = $(renderer.getRenderedItem(item));
        renderedItem.find('input[type="checkbox"]').on('change', function (e) {
            item.isChecked = (e.target).checked;
            if (item.isChecked) {
                _this.presenter.checkItem(item.id);
            }
            else {
                _this.presenter.uncheckItem(item.id);
            }
            _this.renderShoppingList();
        });
        renderedItem.find('.modal-trigger').on('click', function () {
            _this.onEditItem(item);
        });
        return renderedItem;
    };
    ShoppingListView.prototype.setCategories = function (categories) {
        $('#shopping_item_category').html('');
        if (categories.length > 0) {
            $('#shopping_item_category').val(categories[0].id);
        }
        this.addCategories(categories);
    };
    ShoppingListView.prototype.addCategories = function (categories) {
        for (var _i = 0, categories_1 = categories; _i < categories_1.length; _i++) {
            var category = categories_1[_i];
            this.addCategory(category);
        }
    };
    ShoppingListView.prototype.addCategory = function (category) {
        var renderer = new Renderer();
        var categorySelect = $('#shopping_item_category');
        $(renderer.getRenderedSelectCategoryItem(category))
            .appendTo(categorySelect);
        categorySelect.material_select();
    };
    ShoppingListView.prototype.removeItem = function (id) {
        this.items = this.items.filter(function (item) { return item.id != id; });
        this.setItems(this.items);
    };
    ShoppingListView.prototype.onEditItem = function (item) {
        var modal = $('#addNewShoppingListModal');
        modal.addClass('edit').removeClass('create');
        $('#shopping_item_name').val(item.name);
        $('#shopping_item_reminder').text(item.details);
        $('#shopping_item_category').val(item.category.id);
        $('#shopping_item_category').material_select();
        this.editableItem = item;
        Materialize.updateTextFields();
    };
    ShoppingListView.prototype.onAddNewShoppingItem = function () {
        this.presenter.createNewShoppingItem($('#shopping_item_name').val(), $('#shopping_item_category').val(), $('#shopping_item_reminder').val());
    };
    ShoppingListView.prototype.onDeleteItem = function () {
        if (this.editableItem !== null) {
            this.presenter.deleteItem(this.editableItem.id);
        }
    };
    ShoppingListView.prototype.onEditShoppingItem = function () {
        if (this.editableItem !== null) {
            this.presenter.updateShoppingItem(this.editableItem.id, $('#shopping_item_name').val(), $('#shopping_item_category').val(), $('#shopping_item_reminder').val());
        }
    };
    ShoppingListView.prototype.closeAddNewModal = function () {
        $('#addNewShoppingListItemForm').modal('close');
    };
    ShoppingListView.prototype.selectItem = function (id) {
        this.toggleItemSelected(id, true);
    };
    ShoppingListView.prototype.unselectItem = function (id) {
        this.toggleItemSelected(id, false);
    };
    ShoppingListView.prototype.toggleItemSelected = function (id, state) {
        var filteredItems = this.items.filter(function (item) { return item.id == id; });
        if (filteredItems.length == 1) {
            var item = filteredItems[0];
            item.isChecked = state;
            this.updateItem(item);
        }
    };
    ShoppingListView.prototype.buyItem = function (id) {
        this.toggleItemBought(id, true);
    };
    ShoppingListView.prototype.unbuyItem = function (id) {
        this.toggleItemBought(id, false);
    };
    ShoppingListView.prototype.toggleItemBought = function (id, state) {
        var filteredItems = this.items.filter(function (item) { return item.id == id; });
        if (filteredItems.length == 1) {
            var item = filteredItems[0];
            item.isBought = state;
            this.updateItem(item);
        }
    };
    return ShoppingListView;
}());
ShoppingListView.SELECT_ITEM_BOX_HEIGHT = 84;
