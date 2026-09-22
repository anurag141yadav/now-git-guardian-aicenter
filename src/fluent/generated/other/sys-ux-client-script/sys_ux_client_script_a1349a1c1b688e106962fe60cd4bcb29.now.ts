import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['a1349a1c1b688e106962fe60cd4bcb29'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: 'ad349a1c1b688e106962fe60cd4bcb26',
        name: 'viewport_gph/initiallyCollapsed',
        script: `/**
  * @param {params} params
  * @param {api} params.api
  * @param {TransformApiHelpers} params.helpers
  */
function evaluateProperty({api, helpers}) {
	return api.context.props.userPrefs['workspace.showAgentAssist'] != 'true';
}`,
        script_api_version: '2.0.0',
        sys_name: 'viewport_gph/initiallyCollapsed',
        target: 'macroponent',
        type: 'transform',
    },
})
