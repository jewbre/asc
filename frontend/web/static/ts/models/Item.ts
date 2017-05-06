class Item {
    private _id : number;
    private _name : string;
    private _category : Category;
    private _details : string;
    private _isChecked : boolean;
    private _isBought : boolean;


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get category(): Category {
        return this._category;
    }

    set category(value: Category) {
        this._category = value;
    }

    get details(): string {
        return this._details;
    }

    set details(value: string) {
        this._details = value;
    }

    get isChecked(): boolean {
        return this._isChecked;
    }

    set isChecked(value: boolean) {
        this._isChecked = value;
    }

    get isBought(): boolean {
        return this._isBought;
    }

    set isBought(value: boolean) {
        this._isBought = value;
    }
}