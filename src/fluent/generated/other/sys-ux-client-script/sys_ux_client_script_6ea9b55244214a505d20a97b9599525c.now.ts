import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['6ea9b55244214a505d20a97b9599525c'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: '62a9b55245214a507350a7799ac5b45c',
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
