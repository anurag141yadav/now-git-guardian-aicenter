import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['bb131e980e688e104c7008ba842eca0f'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: '7f131e9837688e1085073afd5942860f',
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
