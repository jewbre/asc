class GroupView {
    private presenter: GroupPresenter = null;
    private members : string[] = [];

    constructor(presenter: GroupPresenter) {
        this.presenter = presenter;

        this.presenter.setGroupView(this);

        this.initListeners();
    }

    private initListeners(): void {
        $('#createGroupBtn').on('click', () => {
            this.addNewGroup();
        });

        $('.select-group').on('click', (event) => {
            console.log(
                $(event.currentTarget),
                $(event.currentTarget).data('id'),
            );
            var id = $(event.currentTarget).data('id');
            this.selectGroup(id);
        });

        $('#member').on('keypress', (event) => {
            if (event.charCode == 13) {
                this.addMember($('#member').val());
            }
        })
    }

    private addMember(email : string) : void {
        if(this.members.filter((item) => email ==item).length == 0) {
            this.renderMember(email).appendTo($('#members-list'));
            this.members.push(email);
        }
    }

    private renderMember(email : string) : JQuery {
        const renderer = new Renderer();

        const member = $(renderer.getRenderedMemberForGroup(email));

        member.find('i').on('click', () => {
            this.members = this.members.filter((item) =>  item == email);
            member.remove();
        });

        return member;
    }

    private addNewGroup(): void {
        this.presenter.createNewGroup(
            $('#group_name').val(),
            this.members
        )
    }

    private selectGroup(id: number): void {
        this.presenter.selectGroup(id);
    }
}