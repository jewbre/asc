class ItemBuilder {

    private item : Item = null;

    constructor() {
        this.item = new Item();
    }

    public setId(value: number) {
        this.item.id = value;
        return this;
    }

    public setName(value: string) {
        this.item.name = value;
        return this;
    }

    public setCategory(value : Category) {
        this.item.category = value;
        return this;
    }

    public setDetails(value : string) {
        this.item.details = value;
        return this;
    }

    public setIsChecked(value : boolean) {
        this.item.isChecked = value;
        return this;
    }

    public setIsBought(value : boolean) {
        this.item.isBought = value;
        return this;
    }

    public build() : Item {
        const currentItem = this.item;
        this.item = new Item();
        return currentItem;
    }

    public buildFromApiResponse(apiResponse : ItemApiResponse ) : Item {
        const tmpItem = this.build();

        const newItem = this.setId(apiResponse.id)
            .setName(apiResponse.name)
            .setCategory((new CategoryBuilder()).buildFromApiResponse(apiResponse.category))
            .setIsChecked(apiResponse.isChecked)
            .setIsBought(apiResponse.isBought)
            .setDetails(apiResponse.details)
            .build();

        this.item = tmpItem;

        return newItem;
    }
}