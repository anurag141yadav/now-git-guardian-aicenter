import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['075c72621b314a90759455342a4bcbca'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: 'f25c72621b314a90759455342a4bcbc6',
        name: 'viewport_gph/initiallyCollapsed',
        required_translations: `[
    
]`,
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
