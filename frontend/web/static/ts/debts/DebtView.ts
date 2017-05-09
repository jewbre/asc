class DebtView {
    private presenter : DebtPresenter = null;
    private me : User = null;
    private groupMembers : User[] = [];

    constructor(presenter: DebtPresenter) {
        this.presenter = presenter;
        this.presenter.setDebtView(this);

        this.presenter.updateDebts();

        this.initListeners();
    }

    private initListeners() : void {
        $('#clearDebtBtn').on('click', () =>{
            this.clearDebts();
        });
    }

    public hideClearDebtsPopup() : void {
        $('#clearDebts').modal('close');
    }

    private clearDebts() : void {
        this.presenter.clearDebts(
            $('#debters').val()
        )
    }

    public setGroupMembers(groupMembers : User[]) : void {
        this.groupMembers = groupMembers;
        this.renderDebtCleaning();
    }

    public clearFromGroup(user : User) : void {
        this.me = user;
        this.renderDebtCleaning();
    }

    private renderDebtCleaning() : void {
        const renderer = new Renderer();
        const debters = $('#debters');

        debters.html('');
        debters.val('');
        for (const member of this.groupMembers.filter((m : User) => this.me === null || m.id != this.me.id)) {
            const prtcpt = renderer.getRenderedSelectUserItem(member);
            $(prtcpt).appendTo(debters);
        }

        debters.material_select();
    }

    public displayDebts(debts : Debt[]) : void {

        const debtList = $('#debt-list');
        debtList.html('');

        debts.every((debt : Debt) => {
            this.renderDebt(debt).appendTo(debtList);
            return true;
        });

        const mine = debts.reduce((acc : number, debt: Debt) => acc + debt.amount, 0);

        let debtMessageText = 'Congrats, you are completely even with everybody. :)';
        const debtMessageHolder = $('#debt-message');
        const debtMessage = debtMessageHolder.find('h5');

        debtMessageHolder.removeClass('red-text');
        debtMessageHolder.removeClass('green-text');
        if(mine > 0) {
            debtMessageHolder.addClass('green-text');
            debtMessageText = `You should get ${mine} kn.`;
        } else if(mine < 0){
            debtMessageHolder.addClass('red-text');
            debtMessageText = `You need to give away ${mine} kn.`;
        }

        debtMessage.text(debtMessageText);
    }

    private renderDebt(debt : Debt) : JQuery {
        const renderer = new Renderer();
        const d = $(renderer.getRenderedDebt(debt));

        return d;
    }
}