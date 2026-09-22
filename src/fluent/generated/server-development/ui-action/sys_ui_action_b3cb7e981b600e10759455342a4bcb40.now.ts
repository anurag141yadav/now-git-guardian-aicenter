import { UiAction } from '@servicenow/sdk/core'

UiAction({
    $id: Now.ID['b3cb7e981b600e10759455342a4bcb40'],
    table: 'x_aleen_snguardian_system',
    name: 'Test Connection',
    form: {
        showLink: true,
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
        'current.isValidRecord() && ( gs.hasRole("x_aleen_snguardian.badging_officer") || gs.hasRole("x_aleen_snguardian.manager"))',
    script: ` var tokenExpires = new GlideDateTime();
 tokenExpires.addSeconds(-300);
 current.setValue("token_expiry_date_time", tokenExpires.getValue());
 current.update();
 var authenticationUtil = new AuthenticationUtil(current.number);
 var TokenResponse = authenticationUtil.getToken();
 if ((TokenResponse != null && TokenResponse['token'] != null && TokenResponse['token'] != "") || TokenResponse['success'] == true) {
     gs.addInfoMessage(current.code + " ::  Test connection  is successful!");
 } else {
     gs.addErrorMessage(current.code + " Test connection Error ->" + TokenResponse['message']);
 }`,
    order: 1,
    showUpdate: true,
    showInsert: false,
    roles: ['x_aleen_snguardian.badging_officer', 'x_aleen_snguardian.admin', 'x_aleen_snguardian.manager'],
    $meta: {
        useEsLatest: true,
    },
})
