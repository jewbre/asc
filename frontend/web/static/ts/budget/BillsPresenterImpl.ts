class BillsPresenterImpl implements BudgetPresenter, BillPresenter, DebtPresenter {
    private debtView: DebtView;
    private budgetView: BudgetView;
    private billView: BillView;
    private page: number = 1;

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
                if(this.debtView) {
                    this.debtView.displayDebts(debts);
                }
            });
    }

    public clearDebts(users: number[]): void {
        ApiService.getInstance()
            .clearDebts(users)
            .then((debts: Debt[]) => {
                if(this.debtView) {
                    this.debtView.displayDebts(debts);
                    this.debtView.hideClearDebtsPopup();
                }
            });
    }

    public addToBudget(amount: number): void {
        ApiService.getInstance()
            .addToBudget(amount)
            .then((budget: Budget) => {
                if(this.budgetView) {
                    this.budgetView.displayBudget(budget);
                    this.budgetView.hideAddToBudgetModal();
                }
            });
    }

    public getBillCategories(): void {
        ApiService.getInstance()
            .getBillCategories()
            .then((categories: BillCategory[]) => {
                if (this.billView) {
                    this.billView.setCategories(categories);
                }
            })
    }

    getMe(): void {
        ApiService.getInstance()
            .getMe()
            .then((user: User) => {
                if (this.billView) {
                    this.billView.setSelectedPayer(user);
                }

                if (this.debtView) {
                    this.debtView.clearFromGroup(user);
                }
            })
    }

    getGroupMembers(): void {
        ApiService.getInstance().getGroupMembers()
            .then((members: User[]) => {
                if (this.billView) {
                    this.billView.setGroupMembers(members);
                }

                if (this.debtView) {
                    this.debtView.setGroupMembers(members);
                }
            })
    }

    public createNewBill(category: number | string, amount: number, description: string,
                         date: string, payer: number, participants: number[]) {
        ApiService.getInstance().createNewBill(category, amount, description,
            date, payer, participants)
            .then((bill: Bill) => {
                this.billView.addBill(bill);
                this.billView.hideAddNewBillModal();

                this.updateDebts();
                this.updateBudget();
            })
    }

    public updateBill(id: number, category: number | string, amount: number, description: string,
                      date: string, payer: number, participants: number[]) {
        ApiService.getInstance().updateBill(id, category, amount, description,
            date, payer, participants)
            .then((bill: Bill) => {
                this.billView.replaceBill(bill);
                this.billView.hideAddNewBillModal();

                this.updateDebts();
                this.updateBudget();
            })
    }

    public deleteBill(id: number) {
        ApiService.getInstance().deleteBill(id)
            .then(() => {
                this.billView.removeBill(id);
                this.billView.hideAddNewBillModal();

                this.updateDebts();
                this.updateBudget();
            })
    }

    public getNextBillsPage(): void {
        ApiService.getInstance()
            .getBills(this.page)
            .then(({bills, pagination}: { bills: Bill[], pagination: Pagination }) => {
                this.page++;

                if (pagination.totalPages < this.page) {
                    $('#loadMoreBills').remove();
                }

                this.billView.addBills(bills);
            });
    }
}