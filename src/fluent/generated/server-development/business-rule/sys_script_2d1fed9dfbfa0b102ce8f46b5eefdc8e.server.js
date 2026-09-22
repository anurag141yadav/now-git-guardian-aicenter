(function executeRule(current, previous /*null when async*/ ) {
    // =====================================================================================
    // DRAFT Business Rule - proposal only (active = false until reviewed).
    //
    // Trigger : x_aleen_snguardian_identity, after insert or update. Every firing creates a
    // "New Badge Request" (record producer a1b7dec81b284e106962fe60cd4bcb6c) with
    // request_for = current (the identity record itself - no lookup needed, current IS
    // the identity).
    //
    // request_type=a1b7dec81b284e106962fe60cd4bcb6c AND submitted_by='USER' are required:
    // they match the sys_flow_record_trigger condition of the real "Alert New Badge Two
    // Stage Request Flow" (sys_hub_flow 1159f7231bdbc210207b2179b04bcbcd), which is the
    // actual flow in this app that turns the request into x_aleen_snguardian_identity_asset
    // + x_aleen_snguardian_request_activity records and drives a two-stage (manager, then
    // badge admin) "Ask For Approval" sequence. Get either value wrong and that flow simply
    // never fires, and Request Data/Request Activities stay empty.
    //
    // The MRVS used by New Badge Request is "Assets" (item_option_new_set
    // 027e9a041b684e106962fe60cd4bcb96, internal_name "assets") - NOT "Access Levels" (that
    // one belongs to Change Access Request). The whole set is written as ONE JSON array
    // assigned to current.variables.assets on the generated request record, exactly as a
    // manual catalog submission would - it is NOT exploded into child-table rows by this
    // rule; the flow above does that. Row object keys match the set's real columns:
    //   asset (ref x_aleen_snguardian_asset, qualified status=Un Assigned),
    //   asset_valid_from / asset_valid_to (date/time),
    //   asset_status (ref x_aleen_snguardian_status_code, Active/Inactive),
    //   asset_provisioning_status (ref x_aleen_snguardian_provisioning_status, read-only -
    //     left blank, the flow sets this),
    //   asset_action (ref x_aleen_snguardian_request_entity_action, applicable_to=ASSET),
    //   asset_record_status (hidden, default "NEW").
    //
    // This rule also adds one default approval on its own (task.approval='requested' +
    // a sysapproval_approver row against a dummy admin approver) - this is IN ADDITION to
    // the flow's own two-stage approval, not a replacement for it. Replace
    // DUMMY_APPROVER_USER_NAME with a real approval group/manager lookup before activating.
    //
    // All business data below (asset codes, status/action names, request text) is
    // DUMMY/DEMO data - replace with real lookups before activating.
    // =====================================================================================

    var NEW_BADGE_PRODUCER_SYS_ID = 'a1b7dec81b284e106962fe60cd4bcb6c'; // "New Badge Request"
    var DUMMY_ASSET_CODES = ['AST-0001', 'AST-0002']; // dummy asset codes, one per MRVS row
    var DUMMY_ASSET_STATUS_NAME = 'Active';
    var DUMMY_ASSET_ACTION_CODE = 'ADD';
    var DUMMY_APPROVER_USER_NAME = 'admin'; // dummy default approver - replace before activating
    gs.info("SSS");
    var reqGr = createRequest(current);
    if (!reqGr) {
        gs.error('Auto-Create New Badge Request: failed to create x_aleen_snguardian_request for identity ' + current.getUniqueValue());
        return;
    }
     
    // Write the MRVS: one JSON array, assigned after the record has a sys_id.
    reqGr.variables.assets = JSON.stringify(buildDummyAssetsMRVS());
    if (reqGr.isValidField('approval')) {
        reqGr.approval = 'requested';
    }
    reqGr.update();

    submitForApproval(reqGr);

    gs.info('Auto-Create New Badge Request: created ' + reqGr.getUniqueValue() +
        ' for identity ' + current.getDisplayValue());

    // -------------------------------------------------------------------------------------
    // Creates the parent x_aleen_snguardian_request record. Returns the inserted GlideRecord
    // (re-queried) so its .variables pool can be written to, or null on failure.
    // -------------------------------------------------------------------------------------
    function createRequest(identityGr) {
		try{
        var gr = new GlideRecord('x_aleen_snguardian_request');
        gr.initialize();
        // "description" is the field-mapped column behind the producer's own "Comments"
        // variable (item_option_new.field = "description").
        gr.description = 'Auto-generated New Badge Request for ' + identityGr.getDisplayValue() + ' (demo data)';
		gr.variables.description ="SSSSS";
        gr.request_type = NEW_BADGE_PRODUCER_SYS_ID; // field-mapped behind "Request"

        if (gr.isValidField('submitted_by')) {
            gr.submitted_by = 'USER'; // required - see header note on the flow trigger condition
        }
        if (gr.isValidField('request_for')) {
            gr.request_for = identityGr.getUniqueValue(); // field-mapped behind "Request For"
        }

        var newSysId = gr.insert();
        if (!newSysId) {
            return null;
        }
        gr.get(newSysId); // re-query so the .variables pool is bound to a persisted record
        return gr;
		}catch(_ex){
			gs.info("SSS" + _ex.message);
		}
    }

    // -------------------------------------------------------------------------------------
    // Builds the "Assets" MRVS payload: an array of row objects, one per dummy asset,
    // keyed exactly like the set's real columns.
    // -------------------------------------------------------------------------------------
    function buildDummyAssetsMRVS() {
        var actionSysId = getEntityActionSysId(DUMMY_ASSET_ACTION_CODE);
        var statusSysId = getStatusCodeSysId(DUMMY_ASSET_STATUS_NAME);

        var validFrom = new GlideDateTime();
        var validTo = new GlideDateTime();
        validTo.addYearsUTC(1);

        var rows = [];
        DUMMY_ASSET_CODES.forEach(function(code) {
            var assetSysId = getAssetSysId(code);
            if (!assetSysId) {
                gs.warn('Auto-Create New Badge Request: dummy asset "' + code + '" not found, skipping MRVS row');
                return;
            }
            rows.push({
                asset_record_status: 'NEW',
                asset_action: actionSysId || '',
                asset: assetSysId,
                asset_status: statusSysId || '',
                asset_provisioning_status: '',
                asset_valid_from: validFrom.getValue(),
                asset_valid_to: validTo.getValue()
            });
        });
        return rows;
    }

    // -------------------------------------------------------------------------------------
    // Creates a sysapproval_approver row against the request, defaulted to a dummy admin
    // approver, so every auto-generated request has at least one approval on it by default.
    // -------------------------------------------------------------------------------------
    function submitForApproval(reqGr) {
        var approverSysId = getApproverSysId(DUMMY_APPROVER_USER_NAME);
        if (!approverSysId) {
            gs.warn('Auto-Create New Badge Request: default approver "' + DUMMY_APPROVER_USER_NAME + '" not found, no approval created');
            return;
        }

        var apprGr = new GlideRecord('sysapproval_approver');
        apprGr.initialize();
        apprGr.sysapproval = reqGr.getUniqueValue();
        apprGr.source_table = 'x_aleen_snguardian_request';
        apprGr.approver = approverSysId;
        apprGr.state = 'requested';
        apprGr.insert();
    }

    function getApproverSysId(userName) {
        var userGr = new GlideRecord('sys_user');
        userGr.addQuery('user_name', userName);
        userGr.setLimit(1);
        userGr.query();
        return userGr.next() ? userGr.getUniqueValue() : null;
    }

    function getAssetSysId(code) {
        var astGr = new GlideRecord('x_aleen_snguardian_asset');
        astGr.addQuery('code', code);
        astGr.setLimit(1);
        astGr.query();
        return astGr.next() ? astGr.getUniqueValue() : null;
    }

    function getStatusCodeSysId(name) {
        var scGr = new GlideRecord('x_aleen_snguardian_status_code');
        scGr.addQuery('name', name);
        scGr.setLimit(1);
        scGr.query();
        return scGr.next() ? scGr.getUniqueValue() : null;
    }

    function getEntityActionSysId(code) {
        var eaGr = new GlideRecord('x_aleen_snguardian_request_entity_action');
        eaGr.addQuery('code', code);
        eaGr.setLimit(1);
        eaGr.query();
        return eaGr.next() ? eaGr.getUniqueValue() : null;
    }

})(current, previous);