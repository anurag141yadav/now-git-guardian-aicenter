import { UiAction } from '@servicenow/sdk/core'

UiAction({
    $id: Now.ID['566c91301ba9c250759455342a4bcb79'],
    table: 'x_aleen_snguardian_identity_asset',
    name: 'Print Badge',
    form: {
        showButton: true,
    },
    client: {
        isClient: true,
        isUi11Compatible: true,
        onClick: 'printBadge()',
    },
    workspace: {
        clientScriptV2: `function onClick(g_form) {
    var actionName = g_form.getActionName();
    g_form.submit(actionName);
}`,
    },
    messages: [],
    condition: 'gs.hasRole("x_aleen_snguardian.manager")',
    script: `function printBadge() {
    var gdw = new GlideModal('x_aleen_snguardian_Print', false, 550);
    gdw.setTitle("Preview & Print");
    gdw.setPreference("sysparam_badgeid", g_form.getValue('asset'));
	gdw.setPreference("sysparam_user", g_form.getValue('identity'));
	gdw.setPreference("sysparam_idenAsset",g_form.getUniqueValue());
    gdw.render();
}`,
    showUpdate: true,
    showInsert: false,
    isolateScript: true,
    roles: ['x_aleen_snguardian.badging_officer'],
    $meta: {
        useEsLatest: false,
    },
})
