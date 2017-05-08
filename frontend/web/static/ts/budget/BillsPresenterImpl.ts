class BillsPresenterImpl implements BudgetPresenter, BillPresenter {

    private budgetView: BudgetView;
    private billView: BillView;

    public setBillView(view: BillView): void {
        this.billView = view;
    }

    public setBudgetView(view: BudgetView): void {
        this.budgetView = view;
    }

    public updateBudget(): void {
        ApiService.getInstance()
            .getMineBudget()
            .then((budget: Budget) => {
                this.budgetView.displayBudget(budget);
            });
    }

    public addToBudget(amount: number): void {
        ApiService.getInstance()
            .addToBudget(amount)
            .then((budget: Budget) => {
                this.budgetView.displayBudget(budget);
                this.budgetView.hideAddToBudgetModal();
            });
    }

    public getBillCategories(): void {
        ApiService.getInstance()
            .getBillCategories()
            .then((categories: BillCategory[]) => {
                this.billView.setCategories(categories);
            })
    }

    getMe(): void {
        ApiService.getInstance()
            .getMe()
            .then((user: User) => {
                this.billView.setSelectedPayer(user);
            })
    }

    getGroupMembers(): void {
        ApiService.getInstance().getGroupMembers()
            .then((members: User[]) => {
                this.billView.setGroupMembers(members);
            })
    }

    public createNewBill(category : number|string, amount : number, description : string,
    date : string, payer : number, participants : number[]) {
        ApiService.getInstance().createNewBill(category, amount, description,
            date, payer, participants)
            .then((bill : Bill) => {
                this.billView.addBill(bill);
                this.billView.hideAddNewBillModal();
            })
    }

    public updateBill(id : number, category : number|string, amount : number, description : string,
    date : string, payer : number, participants : number[]) {
        ApiService.getInstance().updateBill(id, category, amount, description,
            date, payer, participants)
            .then((bill : Bill) => {
                this.billView.replaceBill(bill);
                this.billView.hideAddNewBillModal();
            })
    }

    public getNextBillsPage(): void {
        ApiService.getInstance()
            .getBills()
            .then((bills : Bill[]) => {
                this.billView.addBills(bills);
            });
    }
}