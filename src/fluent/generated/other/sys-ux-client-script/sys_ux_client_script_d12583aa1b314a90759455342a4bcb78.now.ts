import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['d12583aa1b314a90759455342a4bcb78'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: 'f25c72621b314a90759455342a4bcbc6',
        name: 'New client script 1',
        required_translations: `[
    
]`,
        script: `/**
* @param {params} params
* @param {api} params.api
* @param {any} params.event
* @param {any} params.imports
* @param {ApiHelpers} params.helpers
*/
function handler({api, event, helpers, imports}) {
    
}`,
        script_api_version: '2.0.0',
        sys_name: 'New client script 1',
        target: 'macroponent',
        type: 'default',
    },
})
