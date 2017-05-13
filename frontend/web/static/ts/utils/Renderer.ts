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

    public getRenderedMemberForGroup(email : string) : string {
        return `<li class="collection-item dismissable"><div>${email}<a href="#!" class="secondary-content"><i class="material-icons">delete</i></a></div></li>`
    }

    public getRenderedShoppingItem(item: Item): string {
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

    public getRenderedSelectCategoryItem(category: Category): string {
        return `<option value="${category.id}">${category.name}</option>`;
    }

    public getRenderedSelectUserItem(user: User): string {
        return `<option value="${user.id}" data-icon="${user.avatar}" class="left circle">${user.username}</option>`;
    }

    public getRenderedSelectBillCategoryItem(category: BillCategory): string {
        return `<option value="${category.id}">${category.name}</option>`;
    }


    public getRenderedBillsCategory(category: string): string {
        return `
        <ul class="col s12" data-category="${category}">
            <p class="bill-card-title">${category}</p>
        </ul>
        `;
    }

    public getRenderedBillCard(bill: Bill): string {
        return `
        <li class="card col s12 l6 row valign-wrapper bill-card" id="bill-card-${bill.id}">
            <div class="col s3 l3 bill-participants">
                <img class="circle main" src="${bill.payer.avatar}"/>
                ${ bill.group.members.length <= 2 ? '' : `
                <img class="circle first" src="${bill.participants[0].avatar}"/>
                ${ bill.participants.length <= 1 ? '' :
                `
                    ${ bill.participants.length <= 2 ? '' :
                    `<img class="circle second" src="${bill.participants[1].avatar}"/>`}
                    ${ bill.participants.length == 2 ?
                    `<img class="circle third" src="${bill.participants[1].avatar}"/>` : ''}
                    ${ bill.participants.length == 3 ?
                    `<img class="circle third" src="${bill.participants[2].avatar}"/>` : ''}
                    ${ bill.participants.length > 3 ?
                    `<span class="deep-purple white-text third">+${bill.participants.length - 3}</span>` : ''}
                    `
                }`
            }
            </div>
            <div class="col s5 l5">
                <span class="category deep-purple-text">${bill.category.name}</span>
                <span class="description">${bill.description}</span>
                <span class="date">${bill.getFormatedDate()}</span>
            </div>
            <div class="col s4 l3">
                <span class="amount">${bill.amount} kn</span>
            </div>
        </li>
        `;
    }

    public getRenderedDebt(debt : Debt) : string {
        let category = '';
        let prefix = '';
        if(debt.amount > 0) {
            category = 'surplus';
            prefix = '+ ';
        } else if(debt.amount < 0){
            category = 'deficit';
            prefix = '';
        }

        return `
        <li class="col s12 l6 row valign-wrapper collection-item ${ category }">
                    <div class="col s3 l3">
                        <img class="circle" src="${debt.user.avatar}"/>
                    </div>
                    <div class="col s5 l5">
                        <p class="title">${debt.user.username}</p>
                    </div>
                    <div class="col s4 l3">
                        <span class="right">${prefix} ${debt.amount} ${debt.currency.shortcode}</span>
                    </div>
                </li>
        `;
    }
}