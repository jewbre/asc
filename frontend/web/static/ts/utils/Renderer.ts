class Renderer {

    public getRenderedItem(item: Item): string {
        return `
        <li class="row shopping-card" data-id="${item.id}" data-value="${item.name}">
            <div class="col s12 m12 l12">
                <div class="card darken-1 hoverable">
                    <div class="card-content black-text">
                        <p class="inline-block">
                            <input type="checkbox" class="filled-in" id="filled-in-box-${item.id}" ${item.isChecked ? 'checked="checked"' : ''}/>
                            <label for="filled-in-box-${item.id}">${item.name}</label>
                            ${item.details ? '<br><span class="details">' + item.details + '</span>' : ''} 
                        </p>
                        <div class="right">
                            <a href="#addNewShoppingListModal" class="modal-trigger"><i class="material-icons left">mode_edit</i></a>
                        </div>
                    </div>
                </div>
            </div>
        </li>
        `;
    }

    public getRenderedShoppingItem(item : Item) : string {
        return `<li class="collection-item avatar valign-wrapper ${item.isBought ? 'checked' : ''}" id="shopping-item-${item.id}">
            <i class="material-icons circle deep-purple item-add">add_shopping_cart</i>
            <i class="material-icons circle deep-purple item-delete md-36">remove_circle</i>
            <div>
                <span class="title">${item.name}</span>
                ${item.details ? `<p>${item.details}</p>` : ''}
            </div>
        </li>`;
    }

    public getRenderedCategory(category: Category): string {
        return `
        <ul data-category="${category.name}">
            <h4>${category.name}</h4>
        </ul>
        `;
    }

    public getRenderedSelectCategoryItem(category : Category) : string {
        return `<option value="${category.id}">${category.name}</option>`;
    }
}