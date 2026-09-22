import { UiAction } from '@servicenow/sdk/core'

UiAction({
    $id: Now.ID['05c3c86847e0669051a3e84d416d439d'],
    table: 'x_aleen_snguardian_badge_template',
    name: 'Open Badge Designer',
    form: {
        showButton: true,
        style: 'primary',
    },
    client: {
        isClient: true,
        isUi11Compatible: true,
        onClick: 'onClick()',
    },
    workspace: {
        clientScriptV2: `function onClick(g_form) {
	var url = 'https://svg-alert.netlify.app/editor/index.html';
    //g_navigation.open(url,'_blank');
	top.window.open(url);
}`,
        showFormButtonV2: true,
        isConfigurableWorkspace: true,
    },
    messages: [],
    condition: 'gs.hasRole("x_aleen_snguardian.badging_officer") || gs.hasRole("x_aleen_snguardian.manager")',
    script: `function onClick(){
	var url = 'https://svg-alert.netlify.app/editor/index.html';
    g_navigation.open(url,'_blank');
	//window.open(url, '_blank');
}`,
    showUpdate: true,
    showInsert: true,
    isolateScript: true,
    roles: ['x_aleen_snguardian.badging_officer'],
})
