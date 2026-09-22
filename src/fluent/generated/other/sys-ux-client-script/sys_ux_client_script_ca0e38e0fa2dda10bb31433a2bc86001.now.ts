import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['ca0e38e0fa2dda10bb31433a2bc86001'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: '420e38e0e22dda100d8d58f504253a02',
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
