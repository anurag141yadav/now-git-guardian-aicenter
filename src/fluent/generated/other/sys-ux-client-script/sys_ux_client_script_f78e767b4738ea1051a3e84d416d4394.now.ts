import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['f78e767b4738ea1051a3e84d416d4394'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: '338eb27b4738ea1051a3e84d416d43df',
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
        route: 'dashboard-library',
        title: 'Dashboard Library',
    });
}`,
        script_api_version: '2.0.0',
        sys_name: 'Redirect to dashboard list',
        target: 'macroponent',
        type: 'default',
    },
})
