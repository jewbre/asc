class CategoryBuilder {

    private category : Category = null;

    constructor() {
        this.category = new Category();
    }

    public setId(value: number) {
        this.category.id = value;
        return this;
    }

    public setName(value: string) {
        this.category.name = value;
        return this;
    }

    public build() : Category {
        const currentCategory = this.category;
        this.category = new Category();
        return currentCategory;
    }

    public buildFromApiResponse(apiResponse : CategoryApiResponse ) : Category {
        const tmpCategory = this.build();

        const newCategory = this.setId(apiResponse.id)
            .setName(apiResponse.name)
            .build();

        this.category = tmpCategory;

        return newCategory;
    }

    public buildApiResponse(category : Category) : CategoryApiResponse {
        return {
            id : category.id,
            name : category.name,
        }
    }
}