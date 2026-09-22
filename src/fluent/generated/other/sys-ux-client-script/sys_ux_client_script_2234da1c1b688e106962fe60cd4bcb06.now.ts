import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['2234da1c1b688e106962fe60cd4bcb06'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: '1e34da1c1b688e106962fe60cd4bcb03',
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
