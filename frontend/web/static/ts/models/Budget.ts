class Budget {
    private _id : number;
    private _group : Group;
    private _currency : Currency;
    private _amount : number;


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get group(): Group {
        return this._group;
    }

    set group(value: Group) {
        this._group = value;
    }

    get currency(): Currency {
        return this._currency;
    }

    set currency(value: Currency) {
        this._currency = value;
    }

    get amount(): number {
        return this._amount;
    }

    set amount(value: number) {
        this._amount = value;
    }
}