import { UiAction } from '@servicenow/sdk/core'

UiAction({
    $id: Now.ID['38c6b1a81b9946106962fe60cd4bcb35'],
    table: 'x_aleen_snguardian_review',
    name: 'Preview',
    form: {
        showButton: true,
        showContextMenu: true,
        style: 'primary',
    },
    list: {
        showContextMenu: true,
        style: 'primary',
        showListChoice: true,
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
    },
    messages: [],
    condition:
        'current.isValidRecord() && gs.hasRole("x_aleen_snguardian.review_admin") && current.status.code == \'DRAFT\'',
    script: `//new AccessReviewHelper(current, true).process();
gs.addInfoMessage(new AccessReviewHelper(current, false).process());`,
    showUpdate: true,
    showInsert: false,
    roles: ['x_aleen_snguardian.review_admin'],
})
