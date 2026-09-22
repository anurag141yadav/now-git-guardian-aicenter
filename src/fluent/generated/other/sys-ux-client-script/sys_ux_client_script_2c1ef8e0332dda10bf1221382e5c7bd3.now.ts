import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['2c1ef8e0332dda10bf1221382e5c7bd3'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: '181ef8e0332dda10bf1221382e5c7bd1',
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
