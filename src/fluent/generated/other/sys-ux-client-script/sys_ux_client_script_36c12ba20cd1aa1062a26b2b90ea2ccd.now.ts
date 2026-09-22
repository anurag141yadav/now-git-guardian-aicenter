import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['36c12ba20cd1aa1062a26b2b90ea2ccd'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: 'f6c12ba20fd1aa10db2852f7ef07b9cd',
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
