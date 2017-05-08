class Bill {
    private _id : number;
    private _description : string;
    private _amount : number;
    private _category : BillCategory;
    private _payer : User;
    private _participants : User[];
    private _date : string;
    private _group : Group;


    get group(): Group {
        return this._group;
    }

    set group(value: Group) {
        this._group = value;
    }

    get id(): number {
        return this._id;
    }

    get date(): string {
        return this._date;
    }

    set date(value: string) {
        this._date = value;
    }

    set id(value: number) {
        this._id = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get amount(): number {
        return this._amount;
    }

    set amount(value: number) {
        this._amount = value;
    }

    get category(): BillCategory {
        return this._category;
    }

    set category(value: BillCategory) {
        this._category = value;
    }

    get payer(): User {
        return this._payer;
    }

    set payer(value: User) {
        this._payer = value;
    }

    get participants(): User[] {
        return this._participants;
    }

    set participants(value: User[]) {
        this._participants = value;
    }

    public getFormatedDate() : string {
        const d = new Date(this.date);
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return `${months[d.getMonth()]} ${d.getFullYear()}`;
    }

    public getSelectFormatedDate() : string {
        const d = new Date(this.date);
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        return `${d.getDate()} ${months[d.getMonth()]}, ${d.getFullYear()}`;
    }
}