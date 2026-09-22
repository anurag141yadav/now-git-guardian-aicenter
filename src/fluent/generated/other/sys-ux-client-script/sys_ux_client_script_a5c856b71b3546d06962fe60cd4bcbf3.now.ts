import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['a5c856b71b3546d06962fe60cd4bcbf3'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: 'bfca1e671b3506d06962fe60cd4bcb76',
        name: 'iframe_1/src',
        required_translations: `[
    
]`,
        script: `/**
  * @param {params} params
  * @param {api} params.api
  * @param {TransformApiHelpers} params.helpers
  */
function evaluateProperty({api, helpers}) {
  var instName = window.location.href;
	return instName;
}`,
        script_api_version: '2.0.0',
        sys_name: 'iframe_1/src',
        target: 'macroponent',
        type: 'transform',
    },
})
