import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['b51b0fe6b97502d01e8b9f2b7492cae2'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: 'b91b0fe6307502d05d30ee5cdfcee5e1',
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
