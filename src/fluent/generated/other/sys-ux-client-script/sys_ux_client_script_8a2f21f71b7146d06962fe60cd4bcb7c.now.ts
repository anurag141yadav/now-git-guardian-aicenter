import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['8a2f21f71b7146d06962fe60cd4bcb7c'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: 'ffd663ae1bb14a90759455342a4bcbd6',
        name: 'iframe_1/src',
        required_translations: '[]',
        script: `/**
  * @param {params} params
  * @param {api} params.api
  * @param {TransformApiHelpers} params.helpers
  */
function evaluateProperty({api, helpers}) {
	var url = "";
  url+="&sysparm_badge="+api.data.look_up_record_1.result.asset.value+"&sysparm_user="+api.data.look_up_record_1.result.identity.value+"&sysparm_idsset="+api.data.look_up_record_1.result._row_data.uniqueValue;
  return url;
}`,
        script_api_version: '2.0.0',
        sys_name: 'iframe_1/src',
        target: 'macroponent',
        type: 'transform',
    },
})
