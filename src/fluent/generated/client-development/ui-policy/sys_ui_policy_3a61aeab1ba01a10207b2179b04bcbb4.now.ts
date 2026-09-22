import { UiPolicy } from '@servicenow/sdk/core'

UiPolicy({
    $id: Now.ID['3a61aeab1ba01a10207b2179b04bcbb4'],
    table: 'x_aleen_snguardian_review',
    shortDescription: 'processing deleted records info message',
    isolateScript: true,
    conditions: 'criteria=PROCESSDELETED^EQ',
    runScripts: true,
    scriptTrue: `function onCondition() {
	g_form.addInfoMessage('Review records will be automatically processed on the scheduled review start date');
}`,
    scriptFalse: `function onCondition() {
    g_form.clearMessages();
}`,
    uiType: 'desktop',
})
