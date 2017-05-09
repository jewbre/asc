<!-- Modal Structure -->
<div id="clearDebts" class="modal">
    <div class="modal-content">
        <h4>Clear debts</h4>
        <div class="row">
            <form class="col s12" id="clearDebtsForm">
                <div class="input-field col s12">
                    <select id="debters" multiple>
                        <!--                            PARTICIPANTS ARE LOADED VIA AJAX-->
                    </select>
                    <label>Users</label>
                </div>
            </form>
        </div>
    </div>
    <div class="modal-footer">
        <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Cancel</a>
        <a href="#!" class="waves-effect waves-green btn-flat" id="clearDebtBtn">Clear debt</a>
    </div>
</div>