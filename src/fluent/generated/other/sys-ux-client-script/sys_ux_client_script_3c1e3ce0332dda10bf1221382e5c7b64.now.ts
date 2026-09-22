import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['3c1e3ce0332dda10bf1221382e5c7b64'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: '381e3ce0332dda10bf1221382e5c7b62',
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
