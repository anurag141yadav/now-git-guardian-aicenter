import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['3e02736a1b3902d06962fe60cd4bcbdc'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: 'ffd663ae1bb14a90759455342a4bcbd6',
        name: 'image_2/src',
        required_translations: `[
    
]`,
        script: `/**
  * @param {params} params
  * @param {api} params.api
  * @param {TransformApiHelpers} params.helpers
  */
function evaluateProperty({api, helpers}) {
  if(api.data.look_up_record_1.result.identity._reference.photo.value!=null || api.data.look_up_record_1.result.identity._reference.photo.value!=""){
    return api.data.look_up_record_1.result.identity._reference.photo.displayValue;
  }else{
    return "/now-image-placeholder.jpg";
  }
}`,
        script_api_version: '2.0.0',
        sys_name: 'image_2/src',
        target: 'macroponent',
        type: 'transform',
    },
})
