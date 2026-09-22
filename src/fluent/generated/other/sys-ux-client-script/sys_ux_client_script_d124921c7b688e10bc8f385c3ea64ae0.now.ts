import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['d124921c7b688e10bc8f385c3ea64ae0'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: '9524921ced688e10bb406725a6fd3fe0',
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
