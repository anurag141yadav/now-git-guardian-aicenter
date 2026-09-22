import { UiPolicy } from '@servicenow/sdk/core'

UiPolicy({
    $id: Now.ID['5e2c609a332a1250bf1221382e5c7b67'],
    table: 'x_aleen_snguardian_visitor_visit',
    shortDescription: 'Read only Location',
    global: false,
    isolateScript: true,
    conditions: 'status!=9a8f711d2b191a10d4dffd74ce91bfdc^EQ',
    runScripts: true,
    scriptTrue: `function onCondition() {
	g_form.setReadOnly("location",true);
}`,
    scriptFalse: `function onCondition() {
g_form.setReadOnly("location",false);
}`,
    uiType: 'all',
    view: 'portaledit',
})
