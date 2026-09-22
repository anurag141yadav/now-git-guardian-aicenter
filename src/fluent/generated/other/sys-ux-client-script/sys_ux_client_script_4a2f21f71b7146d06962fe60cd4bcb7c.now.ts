import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['4a2f21f71b7146d06962fe60cd4bcb7c'],
    table: 'sys_ux_client_script',
    data: {
        includes: '8d8b046a9fd00210a86b86e29a0a1c5a',
        macroponent: 'ffd663ae1bb14a90759455342a4bcbd6',
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
