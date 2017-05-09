class LoginApiService {
    static readonly FB_LOGIN = '/user/login-facebook';
    static readonly GOOGLE_LOGIN = '/user/login-google';

    private static instance: LoginApiService = null;

    private basePath: string = '';

    public static getInstance(): LoginApiService {
        if (LoginApiService.instance == null) {
            LoginApiService.instance = new LoginApiService();
        }

        return LoginApiService.instance;
    }

    private constructor() {
        this.basePath = JSON.parse(document.getElementById('api-base-path').innerText);
    }

    public facebookLogin(accessToken: string): Promise<{ redirectKey: string }> {
        return new Promise((resolve, reject) => {
            this.post<{ redirectKey: string }>(LoginApiService.FB_LOGIN, {
                accessToken
            })
                .then((key: { redirectKey: string }) => {
                    resolve(key);
                })
                .catch(error => {
                    reject(error)
                });
        });
    }

    public googleLogin(accessToken: string): Promise<{ redirectKey: string }> {
        return new Promise((resolve, reject) => {
            this.post<{ redirectKey: string }>(LoginApiService.GOOGLE_LOGIN, {
                accessToken
            })
                .then((key: { redirectKey: string }) => {
                    resolve(key);
                })
                .catch(error => {
                    reject(error)
                });
        });
    }

    public get<T>(path: string): Promise<T> {
        const fullPath = this.basePath + path;
        return new Promise<T>((resolve, reject) => {
            $.ajax({
                url: fullPath,
                method: 'GET',
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

