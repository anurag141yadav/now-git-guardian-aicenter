import { UiAction } from '@servicenow/sdk/core'

UiAction({
    $id: Now.ID['7d0c599b1b89c2506962fe60cd4bcbc6'],
    table: 'x_aleen_snguardian_identity_access',
    name: 'Retry',
    form: {
        showButton: true,
        style: 'primary',
    },
    client: {
        isUi11Compatible: true,
    },
    workspace: {
        clientScriptV2: `function onClick(g_form) {
    var actionName = g_form.getActionName();
    g_form.submit(actionName);
}`,
        showFormButtonV2: true,
        isConfigurableWorkspace: true,
    },
    messages: [],
    condition:
        'current.isValidRecord() && ( gs.hasRole("x_aleen_snguardian.badging_officer") || gs.hasRole("x_aleen_snguardian.manager")) && new ConditionHelper().isAccessRetry(current)',
    script: `if (current) {
	var statusPending;
    var actionStatusMap = {
        'ADD': 'PENDING',
        'UPDATE': 'UPDATE-PENDING',
        'DELETE': 'DELETE-PENDING',
        'CANCEL': 'CANCEL-PENDING'
    };
    var currentAction = current.provisioning_action ? current.provisioning_action.code : 'ADD';
    var currentStatus = current.provisioning_status ? current.provisioning_status.code : 'PENDING';
    var statusCode = actionStatusMap[currentAction] ? actionStatusMap[currentAction] : "";
    var metaHelper = new MetadataGlideRecordHelper();
    if (statusCode) {
        statusPending = metaHelper.getRecordSysIdByCode(
            "x_aleen_snguardian_provisioning_status", currentStatus != statusCode ? statusCode : ""
        );
    }
    current.setValue("provisioning_status", statusPending?statusPending:"");
    current.update();
}`,
    showUpdate: true,
    showInsert: false,
    roles: ['x_aleen_snguardian.badging_officer', 'x_aleen_snguardian.manager'],
    $meta: {
        useEsLatest: true,
    },
})
