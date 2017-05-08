class BudgetView {
    private presenter : BudgetPresenter;

    private budget : Budget = null;

    constructor(presenter: BudgetPresenter) {
        this.presenter = presenter;
        this.presenter.setBudgetView(this);

        this.initListeners();
        this.presenter.updateBudget();
    }

    private initListeners() {
        $('#newAmount').on('change', () => {
            this.displayBudget(this.budget);
        });

        $('#addBudgetBtn').on('click', () => {
            this.addToBudget();
        });
    }

    private addToBudget() {
        this.presenter.addToBudget(this.getCurrentInputValue());
    }

    private getCurrentInputValue() : number {
        return  parseInt($('#newAmount').val());
    }

    public displayBudget(budget : Budget) {
        this.budget = budget;
        $('#budget-amount,#currentBudgetAmount').text(
            `${budget.amount} ${budget.currency.shortcode}`
        );

        $('#newBudgetAmount').text(
            `${budget.amount + this.getCurrentInputValue()} ${budget.currency.shortcode}`
        );
    }

    public showAddToBudgetModal() {
        $('#addToBudget').modal('open');
    }

    public hideAddToBudgetModal() {
        $('#addToBudget').modal('close');
    }
}