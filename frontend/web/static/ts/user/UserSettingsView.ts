class UserSettingsView {
    private presenter : UserSettingsPresenter = null;
    private user : User = null;

    constructor(presenter: UserSettingsPresenter) {
        this.presenter = presenter;
        this.presenter.setView(this);

        this.initListeners();
    }

    private initListeners() {
        $('#updateUserBtn').on('click', () => {
            this.onUpdate();
        })
    }
    public setUser(user : User) {
        this.user = user;
        $('.name').text(user.username);
        $('#user_name').val(user.username);
        Materialize.updateTextFields();
    }

    private onUpdate() : void {
        this.user.username = $('#user_name').val();
        this.presenter.updateUser(
            this.user
        );
    }

    public hidePopup() : void {
        $('#userSettingsModal').modal('close');
    }


}