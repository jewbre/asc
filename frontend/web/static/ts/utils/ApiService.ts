class ApiService {
    static readonly SHOPPING_ITEMS_LIST = '/shopping-item';
    static readonly FINISH_SHOPPING = '/shopping-item/finish-shopping';
    static readonly CREATE_SHOPPING_ITEM = '/shopping-item/create/';
    static readonly UPDATE_SHOPPING_ITEM = '/shopping-item/update/';
    static readonly CHECK_SHOPPING_ITEM = '/shopping-item/check/';
    static readonly UNCHECK_SHOPPING_ITEM = '/shopping-item/uncheck/';
    static readonly SHOPPING_CATEGORIES_LIST = '/shopping-category';

    static readonly BUDGET_MINE = '/budget/mine';
    static readonly BUDGET_ADD = '/budget/add';

    static readonly GET_BILLS = '/bill';
    static readonly BILL_CATEGORIES_LIST = '/bill-category';
    static readonly CREATE_NEW_BILL = '/bill/create';
    static readonly UPDATE_BILL = '/bill/update';

    static readonly GROUP_MEMBER_LIST = '/group/members';

    static readonly ME = '/user/me';

    static readonly DEBTS = '/debt';
    static readonly CLEAR_DEBTS = '/debt/clear';


    static readonly FB_LOGIN = '/user/facebook-login';

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



    public facebookLogin(accessToken : string): Promise<null> {
        return new Promise((resolve, reject) => {
            this.post<null>(ApiService.FB_LOGIN, {
                accessToken
            })
                .then(() => {
                    resolve();
                })
                .catch(error => {
                    reject(error)
                });
        });
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

    public createNewBill(category : number|string, amount : number, description : string,
                          date : string, payer : number, participants : number[]): Promise<Bill> {
        return new Promise((resolve, reject) => {
            this.post<BillApiResponse>(ApiService.CREATE_NEW_BILL, {
                category, amount, description, date, payer, participants
            })
                .then((billApiResponse: BillApiResponse) => {
                    const bill: Bill = (new BillBuilder()).buildFromApiResponse(billApiResponse);
                    resolve(bill);
                })
                .catch(error => {
                    reject(error)
                });
        });
    }

    public clearDebts(participants : number[]): Promise<Debt[]> {
        return new Promise((resolve, reject) => {
            this.post<DebtApiResponse[]>(ApiService.CLEAR_DEBTS, {
                participants
            })
                .then((debtApiResponses: DebtApiResponse[]) => {
                    const debts: Debt[] = debtApiResponses.map(
                        (debtApiResponse: DebtApiResponse) =>
                            (new DebtBuilder()).buildFromApiResponse(debtApiResponse)
                    );

                    resolve(debts);
                })
                .catch(error => {
                    reject(error)
                });
        });
    }

    public updateBill(id : number, category : number|string, amount : number, description : string,
                          date : string, payer : number, participants : number[]): Promise<Bill> {
        return new Promise((resolve, reject) => {
            const finalPath = `${ApiService.UPDATE_BILL}?id=${id}`;
            this.put<BillApiResponse>(finalPath, {
                category, amount, description, date, payer, participants
            })
                .then((billApiResponse: BillApiResponse) => {
                    const bill: Bill = (new BillBuilder()).buildFromApiResponse(billApiResponse);
                    resolve(bill);
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

    public getDebts(): Promise<Debt[]> {
        return new Promise((resolve, reject) => {
            this.get<DebtApiResponse[]>(ApiService.DEBTS)
                .then((debtApiResponses: DebtApiResponse[]) => {
                    const debts: Debt[] = debtApiResponses.map(
                        (debtApiResponse: DebtApiResponse) =>
                            (new DebtBuilder()).buildFromApiResponse(debtApiResponse)
                    );

                    resolve(debts);
                })
                .catch(error => {
                    reject(error)
                });
        });
    }

    public getBills(page? : number): Promise<{ bills : Bill[], pagination : Pagination}> {
        const finalUrl = `${ApiService.GET_BILLS}${ page ? '?page=' + page : ''}`;

        return new Promise((resolve, reject) => {
            this.get<PaginatedApiResponse<BillApiResponse>>(finalUrl)
                .then((paginatedResponse: PaginatedApiResponse<BillApiResponse>) => {
                    const bills: Bill[] = paginatedResponse.items.map(
                        (billApiResponse: BillApiResponse) =>
                            (new BillBuilder()).buildFromApiResponse(billApiResponse)
                    );
                    resolve({
                        bills,
                        pagination : paginatedResponse._pagination
                    });
                })
                .catch(error => {
                    reject(error)
                });
        });
    }

    public getBillCategories(): Promise<BillCategory[]> {
        return new Promise((resolve, reject) => {
            this.get<BillCategoryApiResponse[]>(ApiService.BILL_CATEGORIES_LIST)
                .then((categoryApiResponses: BillCategoryApiResponse[]) => {
                    const categories: BillCategory[] = categoryApiResponses.map(
                        (categoryApiResponse: BillCategoryApiResponse) =>
                            (new BillCategoryBuilder()).buildFromApiResponse(categoryApiResponse)
                    );
                    resolve(categories);
                })
                .catch(error => {
                    reject(error)
                });
        });
    }

    public getMe(): Promise<User> {
        return new Promise((resolve, reject) => {
            this.get<UserApiResponse>(ApiService.ME)
                .then((userApiResponse: UserApiResponse) => {
                    const user: User = (new UserBuilder()).buildFromApiResponse(userApiResponse);
                    resolve(user);
                })
                .catch(error => {
                    reject(error)
                });
        });
    }

    public getGroupMembers(): Promise<User[]> {
        return new Promise((resolve, reject) => {
            this.get<UserApiResponse[]>(ApiService.GROUP_MEMBER_LIST)
                .then((userApiResponse: UserApiResponse[]) => {
                    const users: User[] = userApiResponse.map(
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

    public getShoppingCategories(): Promise<Category[]> {
        return new Promise((resolve, reject) => {
            this.get<CategoryApiResponse[]>(ApiService.SHOPPING_CATEGORIES_LIST)
                .then((categoryApiResponses: CategoryApiResponse[]) => {
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

    public getMineBudget(): Promise<Budget> {
        return new Promise((resolve, reject) => {
            this.get<BudgetApiResponse>(ApiService.BUDGET_MINE)
                .then((budgetApiResponse: BudgetApiResponse) => {
                    resolve((new BudgetBuilder()).buildFromApiResponse(budgetApiResponse));
                })
                .catch((error) => {
                    reject(error);
                })
        });
    }

    public addToBudget(amount : number): Promise<Budget> {
        return new Promise((resolve, reject) => {
            this.post<BudgetApiResponse>(ApiService.BUDGET_ADD, {amount})
                .then((budgetApiResponse: BudgetApiResponse) => {
                    resolve((new BudgetBuilder()).buildFromApiResponse(budgetApiResponse));
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

