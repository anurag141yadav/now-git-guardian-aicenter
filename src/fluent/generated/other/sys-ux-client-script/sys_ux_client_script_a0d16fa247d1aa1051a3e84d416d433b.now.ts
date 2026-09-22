import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['a0d16fa247d1aa1051a3e84d416d433b'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: '60d16fa247d1aa1051a3e84d416d4338',
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
