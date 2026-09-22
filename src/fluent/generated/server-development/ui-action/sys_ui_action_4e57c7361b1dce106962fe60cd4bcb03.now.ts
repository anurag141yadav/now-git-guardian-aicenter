import { UiAction } from '@servicenow/sdk/core'

UiAction({
    $id: Now.ID['4e57c7361b1dce106962fe60cd4bcb03'],
    table: 'x_aleen_snguardian_review_task',
    name: 'Show Records',
    form: {
        showLink: true,
    },
    client: {
        isClient: true,
        isUi11Compatible: true,
        onClick: 'showList()',
    },
    workspace: {
        clientScriptV2: `function onClick(g_form) {
    var ajaxscript = new GlideAjax('IdentityClientScriptHelper');
    ajaxscript.addParam('sysparm_name', 'getReviewFilter');
    ajaxscript.addParam('task_id', g_form.getUniqueValue());
    ajaxscript.getXMLAnswer(responseCallback);

    function responseCallback(response) {
        var data = JSON.parse(response);
         var url_value = '';
		if(data['review_type'] == 'EXPIRY_BADGE'){
			url_value = '/x_aleen_snguardian_identity_asset_list.do';
		}else if(data['review_type'] == 'EXPIRY_TRAINING'){
			url_value = '/x_aleen_snguardian_identity_attestation_list.do';
			//var url =new GlideURL('/x_aleen_snguardian_identity_attestation_list.do');
		}else{
			url_value = '/x_aleen_snguardian_identity_access_list.do';
		}
		url_value = url_value + '?sysparm_stack=no'+'&sysparm_fixed_query='+data['query'];
		
		if (data['group_by_query'] != '') {
			url_value = url_value + '&sysparm_query='+data['group_by_query'];
        } 
		top.window.location = url_value;
    }
}`,
        showFormButtonV2: true,
        isConfigurableWorkspace: true,
    },
    messages: [],
    condition: 'current.isValidRecord()',
    script: `function showList() {

    var gaReviewFilter = new GlideAjax('IdentityClientScriptHelper');
    gaReviewFilter.addParam('sysparm_name', 'getReviewFilter');
    gaReviewFilter.addParam('task_id', g_form.getUniqueValue());
    gaReviewFilter.getXMLAnswer(responseCallback);

    function responseCallback(response) {
        var data = JSON.parse(response);
		var url_value = '';
		if(data['review_type'] == 'EXPIRY_BADGE'){
			url_value = '/x_aleen_snguardian_identity_asset_list.do';
		}else if(data['review_type'] == 'EXPIRY_TRAINING'){
			url_value = '/x_aleen_snguardian_identity_attestation_list.do';
			//var url =new GlideURL('/x_aleen_snguardian_identity_attestation_list.do');
		}else{
			url_value = '/x_aleen_snguardian_identity_access_list.do';
		}
		var url = new GlideURL(url_value);
        //var url =new GlideURL('/x_aleen_snguardian_identity_asset_list.do');
        if (data['group_by_query'] != '') {
            url.addParam('sysparm_query', data['group_by_query']);
        } else {
            url.addParam('sysparm_stack', 'no');
        }
        url.addParam('sysparm_fixed_query', data['query']);
        g_navigation.open(url.getURL(), "_blank");
    }
}`,
    order: 10,
    showUpdate: true,
    showInsert: false,
    isolateScript: true,
    roles: ['x_aleen_snguardian.access_reviewer', 'x_aleen_snguardian.review_admin'],
    $meta: {
        useEsLatest: false,
    },
})
