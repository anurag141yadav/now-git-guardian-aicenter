import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['c01af59275214a50d493ed24c0083c7c'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: 'c41af592ad214a5086230259965c6a7b',
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
