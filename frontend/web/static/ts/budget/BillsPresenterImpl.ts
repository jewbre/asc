class BillsPresenterImpl implements BudgetPresenter {

    private budgetView : BudgetView;


    public setBudgetView(view : BudgetView) : void {
        this.budgetView = view;
    }

    public updateBudget() : void {
        ApiService.getInstance()
            .getMineBudget()
            .then((budget : Budget) => {
                this.budgetView.displayBudget(budget);
            });
    }

    public addToBudget(amount : number) : void {
        ApiService.getInstance()
            .addToBudget(amount)
            .then((budget : Budget) => {
                this.budgetView.displayBudget(budget);
                this.budgetView.hideAddToBudgetModal();
            });
    }
}