class UserBuilder {

    private user : User = null;

    constructor() {
        this.user = new User();
    }

    public setId(value: number) {
        this.user.id = value;
        return this;
    }

    public setUsername(value: string) {
        this.user.username = value;
        return this;
    }

    public setEmail(value: string) {
        this.user.email = value;
        return this;
    }

    public setAvatar(value: string) {
        this.user.avatar = value;
        return this;
    }

    public build() : User {
        const currentUser = this.user;
        this.user = new User();
        return currentUser;
    }

    public buildFromApiResponse(apiResponse : UserApiResponse ) : User {
        const tmpUser = this.build();

        const newUser = this.setId(apiResponse.id)
            .setEmail(apiResponse.email)
            .setUsername(apiResponse.username)
            .setAvatar(apiResponse.avatar)
            .build();

        this.user = tmpUser;

        return newUser;
    }

    public buildApiResponse(user : User) : UserApiResponse{
        return {
            id : user.id,
            username : user.username,
            email : user.email,
            avatar : user.avatar,
        }
    }
}