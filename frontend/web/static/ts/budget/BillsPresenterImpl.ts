class BillsPresenterImpl implements BudgetPresenter, BillPresenter, DebtPresenter {
    private debtView: DebtView;
    private budgetView: BudgetView;
    private billView: BillView;

    public setBillView(view: BillView): void {
        this.billView = view;
    }

    public setBudgetView(view: BudgetView): void {
        this.budgetView = view;
    }

    setDebtView(view: DebtView): void {
        this.debtView = view;
    }

    public updateBudget(): void {
        ApiService.getInstance()
            .getMineBudget()
            .then((budget: Budget) => {
                this.budgetView.displayBudget(budget);
            });
    }

    public updateDebts(): void {
        ApiService.getInstance()
            .getDebts()
            .then((debts: Debt[]) => {
                this.debtView.displayDebts(debts);
            });
    }

    public clearDebts(users: number[]): void {
        ApiService.getInstance()
            .clearDebts(users)
            .then((debts: Debt[]) => {
                this.debtView.displayDebts(debts);
                this.debtView.hideClearDebtsPopup();
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
                this.debtView.clearFromGroup(user);
            })
    }

    getGroupMembers(): void {
        ApiService.getInstance().getGroupMembers()
            .then((members: User[]) => {
                this.billView.setGroupMembers(members);
                this.debtView.setGroupMembers(members);
            })
    }

    public createNewBill(category : number|string, amount : number, description : string,
    date : string, payer : number, participants : number[]) {
        ApiService.getInstance().createNewBill(category, amount, description,
            date, payer, participants)
            .then((bill : Bill) => {
                this.billView.addBill(bill);
                this.billView.hideAddNewBillModal();

                this.updateDebts();
                this.updateBudget();
            })
    }

    public updateBill(id : number, category : number|string, amount : number, description : string,
    date : string, payer : number, participants : number[]) {
        ApiService.getInstance().updateBill(id, category, amount, description,
            date, payer, participants)
            .then((bill : Bill) => {
                this.billView.replaceBill(bill);
                this.billView.hideAddNewBillModal();

                this.updateDebts();
                this.updateBudget();
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