class GroupPresenter {

    private view : GroupView = null;

    public setGroupView(view : GroupView) : void {
        this.view = view;
    }

    public createNewGroup(name : string, members : string[]) : void {
        ApiService.getInstance()
            .createNewGroup(name, members)
            .then((group : Group) => {
                window.location.reload();
            });
    }

    public selectGroup(id : number) : void {
        ApiService.getInstance()
            .selectGroup(id)
            .then((group : Group) => {
                window.location.reload();
            });
    }

}