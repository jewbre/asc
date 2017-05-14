<!-- Modal Structure -->
<div id="createNewExpense" class="modal">
    <div class="modal-content">
        <h4 class="create-title">Create new expense</h4>
        <h4 class="update-title">Update expense</h4>
        <div class="row">
            <form class="col s12" id="createNewExpenseForm">
                <div class="row">
                    <div class="col s12 m6 l6">
                        <div class="valign-wrapper" id="categoryNameInput" style="display: none">
                            <div class="input-field col s9">
                                <input id="bill_category_name" type="text" class="validate">
                                <label for="bill_category_name">Category name</label>
                            </div>
                            <div class="col s3">
                                <a href="#" id="addNewCategory">
                                    <i class="material-icons">done</i>
                                </a>
                                <a href="#" id="cancelAddNewCategory">
                                    <i class="material-icons">clear</i>
                                </a>
                            </div>
                        </div>
                        <div class="valign-wrapper" id="categoryNameSelect">
                            <div class="input-field col s11">
                                <select id="bill_category">
                                    <!--                            CATEGORIES ARE LOADED VIA AJAX-->
                                </select>
                                <label>Category</label>
                            </div>
                            <div class="col s1">
                                <a href="#" id="showAddNewCategory">
                                    <i class="material-icons">library_add</i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col s1 right bill-currency-code-holder">
                        <span class="currency-code">kn</span>
                    </div>
                    <div class="input-field col s10 m3 l3 right">
                        <input id="bill_amount" type="number" class="validate right-align">
                        <label for="bill_amount">Amount</label>
                    </div>
                </div>


                <div class="row">
                    <div class="input-field col s12 m8 l8">
                        <input type="text" id="bill_description" class="materialize-textarea" />
                        <label for="bill_description">Description</label>
                    </div>
                    <div class="input-field col s12 m4 l4">
                        <input class="datepicker" type="date" id="bill_date" />
                        <label for="bill_date">Date</label>
                    </div>


                </div>

                <div class="input-field col s12">
                    <select id="bill_payer">
                        <!--                            PARTICIPANTS ARE LOADED VIA AJAX-->
                    </select>
                    <label>Payer</label>
                </div>
                <div class="input-field col s12">
                    <select id="bill_participants" multiple>
                        <!--                            PARTICIPANTS ARE LOADED VIA AJAX-->
                    </select>
                    <label>Participants</label>
                </div>

            </form>
        </div>
    </div>
    <div class="modal-footer">
        <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat">Cancel</a>
        <a href="#!" class="waves-effect waves-green btn-flat" id="updateBillBtn">Update</a>
        <a href="#!" class="waves-effect waves-green btn-flat" id="createBillBtn">Create</a>
        <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat" id="deleteBillBtn">Delete</a>
    </div>
</div>