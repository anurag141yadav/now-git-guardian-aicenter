import { UiAction } from '@servicenow/sdk/core'

UiAction({
    $id: Now.ID['6363656f1be0c650759455342a4bcb53'],
    table: 'x_aleen_snguardian_system',
    name: 'Sync System Data',
    form: {
        showLink: true,
        style: 'unstyled',
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
        'current.isValidRecord() && ( gs.hasRole("x_aleen_snguardian.badging_officer") || gs.hasRole("x_aleen_snguardian.manager"))',
    script: `var jsonData = new GuardianGlideRecordUtil().toJSON(current, null);
jsonData["datasource_table"] = "x_aleen_snguardian_system";
jsonData["datasource.sys_id"]=current.getUniqueValue();
var provHelper = new ProvisioningHelper(current.number);
provHelper.execute(jsonData, 'GET-ALL-ACCESS-LEVELS', {});
provHelper.execute(jsonData, 'GET-ALL-ASSETS', {});
provHelper.execute(jsonData, 'GET-ALL-USERS', {});`,
    order: 2,
    showUpdate: true,
    showInsert: false,
    roles: ['x_aleen_snguardian.manager', 'x_aleen_snguardian.badging_officer'],
})
