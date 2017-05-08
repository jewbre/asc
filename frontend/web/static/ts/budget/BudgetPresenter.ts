interface BudgetPresenter {
    setBudgetView(view: BudgetView): void;
    updateBudget(): void;
    addToBudget(amount: number): void ;
}