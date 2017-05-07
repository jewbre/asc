class BudgetPresenter {

    private view : BudgetView;


    public setView(view : BudgetView) : void {
        this.view = view;
    }

    public updateBudget() : void {
        ApiService.getInstance()
            .getMineBudget()
            .then((budget : Budget) => {
                this.view.displayBudget(budget);
            });
    }

    public addToBudget(amount : number) : void {
        ApiService.getInstance()
            .addToBudget(amount)
            .then((budget : Budget) => {
                this.view.displayBudget(budget);
                this.view.hideAddToBudgetModal();
            });
    }
}