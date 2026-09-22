import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['9ccdb8231bbdc2d06962fe60cd4bcb97'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: '03ebbcaf1b7dc2d06962fe60cd4bcbee',
        name: 'iframe_1/src',
        required_translations: `[
    
]`,
        script: `/**
  * @param {params} params
  * @param {api} params.api
  * @param {TransformApiHelpers} params.helpers
  */
function evaluateProperty({api, helpers}) {
  return 'https://'+gs.getProperty('instance_name')+'.service-now.com/$map_page_primary.do?sysparm_sys_id='+api.context.props.sysId;
}`,
        script_api_version: '2.0.0',
        sys_name: 'iframe_1/src',
        target: 'macroponent',
        type: 'transform',
    },
})
