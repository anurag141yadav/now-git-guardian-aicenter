import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['a1b979521b214a50759455342a4bcb0f'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: 'ddb979521b214a50759455342a4bcb0c',
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
