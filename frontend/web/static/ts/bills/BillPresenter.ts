interface BillPresenter {
    setBillView(view: BillView): void;
    getNextBillsPage(): void;
    getBillCategories(): void;
    getMe(): void;
    getGroupMembers(): void;
    createNewBill(category: number | string, amount: number, description: string,
                  date: string, payer: number, participants: number[]): void;
    updateBill(id : number, category: number | string, amount: number, description: string,
                  date: string, payer: number, participants: number[]): void;
}