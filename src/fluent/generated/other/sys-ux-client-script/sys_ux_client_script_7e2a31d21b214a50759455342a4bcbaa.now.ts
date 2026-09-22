import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['7e2a31d21b214a50759455342a4bcbaa'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: 'a22a31d21b214a50759455342a4bcb45',
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
