import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['ccda92a71b3506d06962fe60cd4bcb86'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: 'bfca1e671b3506d06962fe60cd4bcb76',
        name: 'Redirect to dashboard list',
        required_translations: `[
    
]`,
        script: `/**
* @param {params} params
* @param {api} params.api
* @param {any} params.event
* @param {any} params.imports
* @param {ApiHelpers} params.helpers
*/
function handler({api}) {
    api.emit('SCREEN_STATUS_CHANGED', {status: 'closed'});
    api.emit('NAV_ITEM_SELECTED', {
        route: 'all-dashboards',
        title: 'All Dashboards',
    });
}`,
        script_api_version: '2.0.0',
        sys_name: 'Redirect to dashboard list',
        target: 'macroponent',
        type: 'default',
    },
})
