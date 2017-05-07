<!-- Modal Structure -->
<div id="addToBudget" class="modal">
    <div class="modal-content">
        <h4>Add to budget</h4>

        <div class="row">
            <div class="col s6 left-align">
                Current budget:
            </div>
            <div class="col s6 right-align" id="currentBudgetAmount">
                4322 kn
            </div>
        </div>
        <div class="row valign-wrapper">
            <div class="col s6 m6 l6 left-align">
                +
            </div>
            <div class="input-field col s6 l6 m6">
                <input placeholder="Amount" id="newAmount" value="100" type="number" class="right-align">
            </div>
            <div class="col s12 notice">
                Reduce budget by entering negative value.
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col s6 left-align">
                New budget
            </div>
            <div class="col s6 right-align" id="newBudgetAmount">
                4322 kn
            </div>
        </div>
    </div>
    <div class="modal-footer">
        <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Cancel</a>
        <a href="#!" class="waves-effect waves-green btn-flat" id="addBudgetBtn">Update</a>
    </div>
</div>