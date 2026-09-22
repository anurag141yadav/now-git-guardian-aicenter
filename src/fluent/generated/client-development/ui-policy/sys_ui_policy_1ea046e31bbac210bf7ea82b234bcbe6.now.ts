import { UiPolicy } from '@servicenow/sdk/core'

UiPolicy({
    $id: Now.ID['1ea046e31bbac210bf7ea82b234bcbe6'],
    table: 'x_aleen_snguardian_request',
    shortDescription: 'Hide Request For Field for Temp Worker on board request',
    isolateScript: true,
    conditions: 'request_type=f07913481b6c4e106962fe60cd4bcb32^EQ',
    runScripts: true,
    scriptTrue: `function onCondition() {
 g_form.setDisplay("request_for",false);
}

`,
    scriptFalse: `function onCondition() {

}`,
    uiType: 'desktop',
})
