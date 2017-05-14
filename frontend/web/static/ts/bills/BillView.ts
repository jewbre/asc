class BillView {

    private presenter: BillPresenter;
    private bills: Bill[] = [];

    private members: User[] = [];
    private selectedPayer : User = null;

    private editableBill: Bill = null;

    constructor(presenter: BillPresenter) {
        this.presenter = presenter;
        this.presenter.setBillView(this);

        this.initListeners();

        this.presenter.getNextBillsPage();
        this.presenter.getBillCategories();
        this.presenter.getGroupMembers();
        this.presenter.getMe();
    }

    private initListeners() {
        $('#createNewExpenseNavbar').on('click', () => {
            $('#createNewExpense').addClass('adding');
            this.setSelectedPayer(this.selectedPayer);
        });


        $('#loadMoreBills').on('click', () => {
            this.presenter.getNextBillsPage();
        });
        $('#showAddNewCategory').on('click', () => {
            $('#categoryNameInput').show();
            $('#categoryNameSelect').hide();
        });

        $('#cancelAddNewCategory').on('click', () => {
            $('#categoryNameInput').hide();
            $('#categoryNameSelect').show();
        });

        $('#addNewCategory').on('click', () => {
            $('#categoryNameInput').hide();
            $('#categoryNameSelect').show();

            const category = new BillCategory();
            const billCategoryName = $('#bill_category_name');
            category.id = billCategoryName.val();
            category.name = billCategoryName.val();
            this.addCategory(category);

            const billCategory = $('#bill_category');
            billCategory.val(billCategoryName.val());
            billCategory.material_select();
        });

        $('#bill_payer').on('change', (e) => {
            const selectedPayer = $(e.target).val();
            this.renderFilteredParticipants(selectedPayer);
        });

        $('#createBillBtn').on('click', () => {
            this.createNewBill();
        });

        $('#deleteBillBtn').on('click', () => {
            this.onDeleteBill();
        });

        $('#updateBillBtn').on('click', () => {
            this.updateBill();
        });
    }

    public hideAddNewBillModal() : void {
        $('#createNewExpense').modal('close');
    }

    private renderFilteredParticipants(selectedPlayerID : number) : void {
        this.renderParticipants(
            this.members.filter((member: User) => member.id != selectedPlayerID)
        );
    }

    public setSelectedPayer(member : User) : void {
        this.selectedPayer = member;
        const payer = $('#bill_payer');
        payer.val(member.id);
        payer.material_select();

        this.renderFilteredParticipants(member.id);
    }

    private renderParticipants(members: User[]): void {
        const renderer = new Renderer();
        const participants = $('#bill_participants');

        participants.html('');

        for (const member of members) {
            const prtcpt = renderer.getRenderedSelectUserItem(member);
            $(prtcpt).appendTo(participants);
        }

        participants.material_select();
    }

    private renderPayers(members: User[]): void {
        const renderer = new Renderer();
        const payer = $('#bill_payer');

        payer.html('');

        for (const member of members) {
            const pyr = renderer.getRenderedSelectUserItem(member);
            $(pyr).appendTo(payer);
        }

        payer.material_select();
    }

    public setGroupMembers(members: User[]): void {
        this.members = members;

        this.renderPayers(members);
        this.renderParticipants(members);
    }

    public setCategories(categories: BillCategory[]) {
        $('#bill_category').html('');
        this.addCategories(categories);
    }

    public addCategories(categories: BillCategory[]) {
        for (const category of categories) {
            this.addCategory(category);
        }

        if (categories.length > 0) {
            $('#bill_category').val(categories[0].id);
        }
        $('#bill_category').material_select();
    }

    public addCategory(category: BillCategory) {
        const renderer = new Renderer();
        const categorySelect = $('#bill_category');
        $(renderer.getRenderedSelectBillCategoryItem(category))
            .appendTo(categorySelect);

        categorySelect.material_select();
    }


    public setBills(bills: Bill[]) {
        $('#billsHolder').html('');
        this.bills = [];
        this.addBills(bills);
    }

    public addBills(bills: Bill[]) {
        bills.sort((a : Bill, b : Bill) => {
            return a.date > b.date ? -1 : 1;
        });

        for (const bill of bills) {
            this.addBill(bill);
        }
    }

    public addBill(bill: Bill) {
        this.bills.push(bill);

        this.renderCategories();
        const categoryHolder = $(`ul[data-category="${bill.getFormatedDate()}"]`);

        this.renderBill(bill).appendTo(categoryHolder);
    }

    public replaceBill(bill : Bill) {
        let existingBill : Bill = null;
        this.bills = this.bills.map((b) => {
            if(b.id == bill.id) {
                existingBill = b;
                return bill;
            }
            return b;
        });

        const newBill = this.renderBill(bill);

        const $existingBill = $(`#bill-card-${existingBill.id}`);
        if(existingBill.getFormatedDate() == bill.getFormatedDate()) {
            $existingBill.replaceWith(newBill);
        } else {
            this.setBills(this.bills);
        }
    }

    private getCategories(): string[] {
        return this.bills.reduce((acc: string[], bill: Bill) => {
            if (acc.indexOf(bill.getFormatedDate()) === -1) {
                acc.push(bill.getFormatedDate());
            }
            return acc;
        }, []);
    }

    private renderCategories() {
        const renderer = new Renderer();

        for (const category of this.getCategories()) {
            let categoryHolder = $(`ul[data-category="${category}"]`);

            if (categoryHolder.length == 0) {
                categoryHolder = $(renderer.getRenderedBillsCategory(category));
                categoryHolder.appendTo($('#billsHolder'));
            }
        }
    }

    private renderBill(bill: Bill): JQuery {
        const renderer = new Renderer();
        const renderedItem = $(renderer.getRenderedBillCard(bill));

        renderedItem.on('click', () => {
            this.onEditBill(bill);
        });
        return renderedItem;
    }

    private onEditBill(bill: Bill) {
        this.editableBill = bill;

        $('#categoryNameSelect').val(bill.category.id);
        $('#bill_amount').val(bill.amount);
        $('#bill_description').val(bill.description);
        $('#bill_date').val(bill.getSelectFormatedDate());

        var billPayer = $('#bill_payer');
        billPayer.val(bill.payer.id);
        billPayer.material_select();

        const billParticipants = $('#bill_participants');
        const participantValue: any = bill.participants.reduce((acc: number[], p: User) => {
            acc.push(p.id);
            return acc;
        }, []);
        billParticipants.val(participantValue);
        billParticipants.material_select();

        const createNewExpenseModal = $('#createNewExpense');
        createNewExpenseModal.removeClass('adding');
        createNewExpenseModal.modal('open');

        Materialize.updateTextFields();
    }

    public onDeleteBill() : void {
        this.presenter.deleteBill(
            this.editableBill.id
        );
    }

    public removeBill(id : number) {
        this.setBills(this.bills.filter((bill : Bill) => bill.id != id));
    }

    private createNewBill() : void {
        const d = new Date($('#bill_date').val());
        this.presenter.createNewBill(
            $('#bill_category').val(),
            $('#bill_amount').val(),
            $('#bill_description').val(),
            d.toISOString(),
            $('#bill_payer').val(),
            $('#bill_participants').val(),
        );
    }

    private updateBill() : void {
        const d = new Date($('#bill_date').val());
        this.presenter.updateBill(
            this.editableBill.id,
            $('#bill_category').val(),
            $('#bill_amount').val(),
            $('#bill_description').val(),
            d.toISOString(),
            $('#bill_payer').val(),
            $('#bill_participants').val(),
        );
    }
}