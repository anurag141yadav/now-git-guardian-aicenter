import { UiAction } from '@servicenow/sdk/core'

UiAction({
    $id: Now.ID['e42279db1bcdce10759455342a4bcbe2'],
    table: 'x_aleen_snguardian_request',
    name: 'Show Flow',
    form: {
        showLink: true,
    },
    client: {
        isClient: true,
        isUi11Compatible: true,
        onClick: 'showWorkFlowContext()',
    },
    workspace: {
        clientScriptV2: `function onClick(g_form) {
    var actionName = g_form.getActionName();
    g_form.submit(actionName);
}`,
        isConfigurableWorkspace: true,
    },
    messages: [],
    condition: '!current.isNewRecord() && current.isValidRecord()',
    script: `function showWorkFlowContext() {
    var gaFlowContext = new GlideAjax('IdentityClientScriptHelper');
    gaFlowContext.addParam('sysparm_name', 'getFlowContext');
    gaFlowContext.addParam('source_table', g_form.getTableName());
    gaFlowContext.addParam('source_record', g_form.getUniqueValue());
    gaFlowContext.getXMLAnswer(flowContextDatacallback);

    function flowContextDatacallback(response) {
        if (null != response) {
            var responseObj = JSON.parse(response);
            var url = new GlideURL('/$flow-designer.do#/operations/context/' + responseObj.id);
            url.addParam('sysparm_stack', 'no');
            g_navigation.open(url.getURL(), "_blank");
        }
    }
}`,
    showUpdate: true,
    showInsert: false,
    isolateScript: true,
    roles: ['x_aleen_snguardian.employee'],
    $meta: {
        useEsLatest: false,
    },
})
