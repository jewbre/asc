class ApiService {
    static readonly SHOPPING_ITEMS_LIST = '/shopping-item';
    static readonly FINISH_SHOPPING = '/shopping-item/finish-shopping';
    static readonly CREATE_SHOPPING_ITEM = '/shopping-item/create/';
    static readonly UPDATE_SHOPPING_ITEM = '/shopping-item/update/';
    static readonly CHECK_SHOPPING_ITEM = '/shopping-item/check/';
    static readonly UNCHECK_SHOPPING_ITEM = '/shopping-item/uncheck/';
    static readonly SHOPPING_CATEGORIES_LIST = '/shopping-category';

    private static instance: ApiService = null;

    private token: string = '';
    private basePath: string = '';

    public static getInstance(): ApiService {
        if (ApiService.instance == null) {
            ApiService.instance = new ApiService();
        }

        return ApiService.instance;
    }

    private constructor() {
        this.token = JSON.parse(document.getElementById('api-token').innerText);
        this.basePath = JSON.parse(document.getElementById('api-base-path').innerText);
    }

    public searchUsers(query: string): Promise<User[]> {
        const fullPath = `/asc/backend/web/api/user/search?query=${query}`;
        return new Promise<User[]>((resolve, reject) => {
            this.get<UserApiResponse[]>(fullPath)
                .then((userApiResponses: UserApiResponse[]) => {
                    const users: User[] = userApiResponses.map(
                        (userApiResponse: UserApiResponse) =>
                            (new UserBuilder()).buildFromApiResponse(userApiResponse)
                    );
                    resolve(users);
                })
                .catch(error => {
                    reject(error)
                });
        });
    }

    public finishShopping(items: Item[]): Promise<Item[]> {
        const apiItems: ItemApiResponse[] = items.map((item: Item) => {
            return (new ItemBuilder()).buildApiResponse(item);
        });

        return new Promise((resolve, reject) => {
            this.post<ItemApiResponse[]>(ApiService.FINISH_SHOPPING, {items: apiItems})
                .then((itemApiResponses: ItemApiResponse[]) => {
                    const items: Item[] = itemApiResponses.map(
                        (itemApiResponse: ItemApiResponse) =>
                            (new ItemBuilder()).buildFromApiResponse(itemApiResponse)
                    );

                    resolve(items);
                })
                .catch(error => {
                    reject(error)
                });
        });
    }

    public getShoppingListItems(): Promise<Item[]> {
        return new Promise((resolve, reject) => {
            this.get<ItemApiResponse[]>(ApiService.SHOPPING_ITEMS_LIST)
                .then((itemApiResponses: ItemApiResponse[]) => {
                    const items: Item[] = itemApiResponses.map(
                        (itemApiResponse: ItemApiResponse) =>
                            (new ItemBuilder()).buildFromApiResponse(itemApiResponse)
                    );

                    resolve(items);
                })
                .catch(error => {
                    reject(error)
                });
        });
    }

    public getShoppingCategories(): Promise<Category[]> {
        return new Promise((resolve, reject) => {
            this.get<CategoryApiResponse[]>(ApiService.SHOPPING_CATEGORIES_LIST)
                .then((categoryApiResponses: ItemApiResponse[]) => {
                    const categories: Category[] = categoryApiResponses.map(
                        (categoryApiResponse: CategoryApiResponse) =>
                            (new CategoryBuilder()).buildFromApiResponse(categoryApiResponse)
                    );
                    resolve(categories);
                })
                .catch(error => {
                    reject(error)
                });
        });
    }

    public createNewShoppingItem(name: string, category: string | number, reminder: string): Promise<Item> {
        return new Promise((resolve, reject) => {
            this.post<ItemApiResponse>(ApiService.CREATE_SHOPPING_ITEM, {name, category, reminder})
                .then((itemApiResponse: ItemApiResponse) => {
                    resolve((new ItemBuilder()).buildFromApiResponse(itemApiResponse));
                })
                .catch((error) => {
                    reject(error);
                })
        });
    }

    public updateShoppingItem(id: number, name: string, category: string | number, details: string): Promise<Item> {
        const url = `${ApiService.UPDATE_SHOPPING_ITEM}?id=${id}`;
        return new Promise((resolve, reject) => {
            this.put<ItemApiResponse>(url, {name, category, details})
                .then((itemApiResponse: ItemApiResponse) => {
                    resolve((new ItemBuilder()).buildFromApiResponse(itemApiResponse));
                })
                .catch((error) => {
                    reject(error);
                })
        });
    }

    public checkShoppingItem(id: number) {
        const url = `${ApiService.CHECK_SHOPPING_ITEM}?id=${id}`;
        return new Promise((resolve, reject) => {
            this.get<ItemApiResponse>(url)
                .then((itemApiResponse: ItemApiResponse) => {
                    resolve((new ItemBuilder()).buildFromApiResponse(itemApiResponse));
                })
                .catch((error) => {
                    reject(error);
                })
        });
    }

    public uncheckShoppingItem(id: number) {
        const url = `${ApiService.UNCHECK_SHOPPING_ITEM}?id=${id}`;
        return new Promise((resolve, reject) => {
            this.get<ItemApiResponse>(url)
                .then((itemApiResponse: ItemApiResponse) => {
                    resolve((new ItemBuilder()).buildFromApiResponse(itemApiResponse));
                })
                .catch((error) => {
                    reject(error);
                })
        });
    }

    public get<T>(path: string): Promise<T> {
        const fullPath = this.basePath + path;
        return new Promise<T>((resolve, reject) => {
            $.ajax({
                url: fullPath,
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${this.token}`
                },

            }).done((data: T) => {
                resolve(data);
            }).fail((error) => {
                reject(error);
            })
        });
    }

    public post<T>(path: string, data: any): Promise<T> {
        const fullPath = this.basePath + path;
        return new Promise<T>((resolve, reject) => {
            $.ajax({
                url: fullPath,
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${this.token}`
                },
                data: data,
                contentType: "application/x-www-form-urlencoded",
            }).done((data: T) => {
                resolve(data);
            }).fail((error) => {
                reject(error);
            })
        });
    }

    public put<T>(path: string, data: any): Promise<T> {
        const fullPath = this.basePath + path;
        return new Promise<T>((resolve, reject) => {
            $.ajax({
                url: fullPath,
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${this.token}`
                },
                data: data,
                contentType: "application/x-www-form-urlencoded",
            }).done((data: T) => {
                resolve(data);
            }).fail((error) => {
                reject(error);
            })
        });
    }
}

