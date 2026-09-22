import { UiAction } from '@servicenow/sdk/core'

UiAction({
    $id: Now.ID['405bc3981ba00e10759455342a4bcb9f'],
    table: 'x_aleen_snguardian_identity_asset',
    name: 'Deactivate Badge',
    form: {
        showButton: true,
        style: 'destructive',
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
    condition: "current.isValidRecord() && current.status.code  == 'ACTIVE'",
    script: `if (current) {
    var statusPending;
    var actionStatusMap = {
        'DEACTIVATE': 'UPDATE-PENDING',
    };
	var currentAction = 'DEACTIVATE';
    var currentStatus = current.provisioning_status ? current.provisioning_status.code : 'PENDING';
    var statusCode = actionStatusMap[currentAction] ? actionStatusMap[currentAction] : "";
    var metaHelper = new MetadataGlideRecordHelper();
    if (statusCode) {
        statusPending = metaHelper.getRecordSysIdByCode(
            "x_aleen_snguardian_provisioning_status", currentStatus != statusCode ? statusCode : ""
        );
    }
    current.setValue('provisioning_action', metaHelper.getRecordSysIdByCode(
        "x_aleen_snguardian_request_entity_action", currentAction
    ).toString());
    current.setValue("provisioning_status", statusPending ? statusPending : "");
    current.update();
}`,
    showUpdate: true,
    showInsert: false,
    roles: ['x_aleen_snguardian.badging_officer'],
    $meta: {
        useEsLatest: true,
    },
})
