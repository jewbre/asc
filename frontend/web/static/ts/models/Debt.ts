class Debt {
    private _amount : number;
    private _user : User;
    private _currency : Currency;


    get amount(): number {
        return this._amount;
    }

    set amount(value: number) {
        this._amount = value;
    }

    get user(): User {
        return this._user;
    }

    set user(value: User) {
        this._user = value;
    }

    get currency(): Currency {
        return this._currency;
    }

    set currency(value: Currency) {
        this._currency = value;
    }
}