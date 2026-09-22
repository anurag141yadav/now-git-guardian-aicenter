import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['dccdb8231bbdc2d06962fe60cd4bcb97'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: '03ebbcaf1b7dc2d06962fe60cd4bcbee',
        name: 'iframe_2/src',
        required_translations: `[
    
]`,
        script: `/**
  * @param {params} params
  * @param {api} params.api
  * @param {TransformApiHelpers} params.helpers
  */
function evaluateProperty({api, helpers}) {
	return 'done';
}`,
        script_api_version: '2.0.0',
        sys_name: 'iframe_2/src',
        target: 'macroponent',
        type: 'transform',
    },
})
