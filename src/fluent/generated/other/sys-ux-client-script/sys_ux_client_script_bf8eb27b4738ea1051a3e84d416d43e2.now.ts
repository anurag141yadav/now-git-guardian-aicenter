import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['bf8eb27b4738ea1051a3e84d416d43e2'],
    table: 'sys_ux_client_script',
    data: {
        includes: 'fdacb518b7320110aab961d9ce11a989',
        macroponent: '338eb27b4738ea1051a3e84d416d43df',
        name: 'Dashboard Widget Clicked',
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
	const {getPayload} = imports['sn_app_analytics_w.ParWidgetsDrilldowns']();	
    const payload = getPayload(event);	
	api.emit('NAV_ITEM_SELECTED', payload);
}`,
        script_api_version: '2.0.0',
        sys_name: 'Dashboard Widget Clicked',
        target: 'macroponent',
        type: 'default',
    },
})
