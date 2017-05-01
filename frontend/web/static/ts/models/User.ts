class User {
    private _id : number;
    private _username : string;
    private _email : string;
    private _avatar : string;

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get avatar(): string {
        return this._avatar;
    }

    set avatar(value: string) {
        this._avatar = value;
    }
}