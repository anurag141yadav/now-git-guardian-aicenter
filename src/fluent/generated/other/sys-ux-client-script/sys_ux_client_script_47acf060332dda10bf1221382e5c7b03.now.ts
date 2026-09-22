import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['47acf060332dda10bf1221382e5c7b03'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: 'c3acb060332dda10bf1221382e5c7bf9',
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
