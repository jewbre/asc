class UserSettingsPresenter {
    private view : UserSettingsView = null;


    constructor() {
        $(document).on('user', (event, data : {user : User}) => {
            this.view.setUser(data.user);
        })
    }

    public setView(view : UserSettingsView) {
        this.view = view;
    }

    public updateUser(user : User) {
        ApiService.getInstance()
            .updateUser(user)
            .then((user : User) => {
                $(document).trigger('user', {user});
                this.view.setUser(user);
                this.view.hidePopup();
            })
    }
}