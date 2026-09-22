import { UiPolicy } from '@servicenow/sdk/core'

UiPolicy({
    $id: Now.ID['c787a1001bd5c2106962fe60cd4bcbae'],
    table: 'x_aleen_snguardian_identity_access',
    shortDescription: 'Hide Reviewer Fields based on User Role',
    isolateScript: true,
    runScripts: true,
    scriptTrue: `function onCondition() {
    //if (g_user.hasRoleExactly('x_aleen_snguardian.access_reviewer')) {
    if (g_user.hasRole('x_aleen_snguardian.access_reviewer')) {
        g_form.setDisplay('review_status', true);
        g_form.setDisplay('review_assigned_to', true);
        g_form.setDisplay('review_action', true);
        g_form.setDisplay('last_reviewed_on', true);
        g_form.setDisplay('last_reviewed_by', true);
        g_form.setDisplay('last_used_on', true);
        g_form.setDisplay('delegated_to', true);
        g_form.setDisplay('review_task', true);
        g_form.setSectionDisplay('review_info', true);
    } else {
        g_form.setDisplay('review_status', false);
        g_form.setDisplay('review_assigned_to', false);
        g_form.setDisplay('review_action', false);
        g_form.setDisplay('last_reviewed_on', false);
        g_form.setDisplay('last_reviewed_by', false);
        g_form.setDisplay('last_used_on', false);
        g_form.setDisplay('delegated_to', false);
        g_form.setDisplay('review_task', false);
        g_form.setSectionDisplay('review_info', false);
    }
}`,
    scriptFalse: `function onCondition() {

}`,
    uiType: 'all',
    $meta: {
        useEsLatest: false,
    },
})
