import { UiPolicy } from '@servicenow/sdk/core'

UiPolicy({
    $id: Now.ID['3d7a52901b445210bf7ea82b234bcb1c'],
    table: 'x_aleen_snguardian_asset',
    shortDescription: 'If type mobile Credential show sub type else hide',
    isolateScript: true,
    conditions: 'type!=e08f8ed51bbc8210759455342a4bcbcb^EQ',
    runScripts: true,
    scriptTrue: `function onCondition() {
	g_form.setDisplay("sub_type",false);
	g_form.setDisplay("sub_system", false);
}`,
    scriptFalse: `function onCondition() {
    g_form.setDisplay("sub_type", true);
    g_form.setDisplay("sub_system", true);
}`,
    uiType: 'all',
})
