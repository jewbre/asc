class GroupBuilder {

    private group : Group = null;

    constructor() {
        this.group = new Group();
    }

    public setId(value: number) {
        this.group.id = value;
        return this;
    }

    public setName(value: string) {
        this.group.name = value;
        return this;
    }

    public setMembers(value : User[]) {
        this.group.members = value;
        return this;
    }

    public build() : Group {
        const currentGroup = this.group;
        this.group = new Group();
        return currentGroup;
    }

    public buildFromApiResponse(apiResponse : GroupApiResponse ) : Group {
        const tmpGroup = this.build();

        const newGroup = this.setId(apiResponse.id)
            .setName(apiResponse.name)
            .setMembers(
                apiResponse.members.map(
                    (userApiResponse : UserApiResponse) =>
                        (new UserBuilder()).buildFromApiResponse(userApiResponse)
                )
            )
            .build();

        this.group = tmpGroup;

        return newGroup;
    }

    public buildApiResponse(group : Group) : GroupApiResponse {
        return {
            id : group.id,
            name : group.name,
            members : group.members.map((member : User) => (new UserBuilder()).buildApiResponse(member))
        }
    }
}