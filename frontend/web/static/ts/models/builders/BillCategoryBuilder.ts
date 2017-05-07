class BillCategoryBuilder {

    private category : BillCategory = null;

    constructor() {
        this.category = new BillCategory();
    }

    public setId(value: number) {
        this.category.id = value;
        return this;
    }

    public setName(value: string) {
        this.category.name = value;
        return this;
    }

    public build() : BillCategory {
        const currentBillCategory = this.category;
        this.category = new BillCategory();
        return currentBillCategory;
    }

    public buildFromApiResponse(apiResponse : BillCategoryApiResponse ) : BillCategory {
        const tmpBillCategory = this.build();

        const newBillCategory = this.setId(apiResponse.id)
            .setName(apiResponse.name)
            .build();

        this.category = tmpBillCategory;

        return newBillCategory;
    }

    public buildApiResponse(category : BillCategory) : BillCategoryApiResponse {
        return {
            id : category.id,
            name : category.name,
        }
    }
}