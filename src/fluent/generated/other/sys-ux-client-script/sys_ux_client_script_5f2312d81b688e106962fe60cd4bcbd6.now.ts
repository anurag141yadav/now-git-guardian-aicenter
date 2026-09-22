import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['5f2312d81b688e106962fe60cd4bcbd6'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: '5b2312d81b688e106962fe60cd4bcbd4',
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
