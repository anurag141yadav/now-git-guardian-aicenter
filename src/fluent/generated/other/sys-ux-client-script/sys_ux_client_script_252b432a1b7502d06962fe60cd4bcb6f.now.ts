import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['252b432a1b7502d06962fe60cd4bcb6f'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: 'ed2b432a1b7502d06962fe60cd4bcb6c',
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
