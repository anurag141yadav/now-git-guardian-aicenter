import { UiPolicy } from '@servicenow/sdk/core'

UiPolicy({
    $id: Now.ID['68bacf694787a69051a3e84d416d43d3'],
    table: 'x_aleen_snguardian_system',
    shortDescription: 'Conditional Credential View Policy',
    isolateScript: true,
    conditions: 'authentication=USERNAMEPASSOWRD^EQ',
    runScripts: true,
    scriptTrue: `function onCondition() {
	g_form.setDisplay("username",true);
	g_form.setDisplay("password",true);
	g_form.setDisplay("oauth_entity_profile",false);
}`,
    scriptFalse: `function onCondition() {
	g_form.setDisplay("username",false);
	g_form.setDisplay("password",false);
    g_form.setDisplay("oauth_entity_profile", true);
}`,
    uiType: 'all',
    $meta: {
        useEsLatest: false,
    },
})
