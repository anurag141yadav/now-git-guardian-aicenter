import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['732a71d21b214a50759455342a4bcb81'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: 'bf2a71d21b214a50759455342a4bcb7e',
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
