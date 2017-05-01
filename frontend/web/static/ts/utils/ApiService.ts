class ApiService {
    private static instance: ApiService = null;

    private token: string = '';

    public static getInstance(): ApiService {
        if (ApiService.instance == null) {
            ApiService.instance = new ApiService();
        }

        return ApiService.instance;
    }

    private constructor() {
        this.token = JSON.parse(document.getElementById('api-token').innerText);
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

    public get<T>(path: string): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            $.ajax({
                url: path,
                method: 'GET',
            }).done((data: T) => {
                resolve(data);
            }).fail((error) => {
                reject(error);
            })
        });
    }
}

