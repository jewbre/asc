interface DebtPresenter {
    setDebtView(view: DebtView): void;
    updateDebts(): void;
    clearDebts(users : number[]): void;
}