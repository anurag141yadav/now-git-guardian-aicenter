import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['db55b2f21b7542d06962fe60cd4bcb19'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: 'c12b432a1b7502d06962fe60cd4bcb2d',
        name: 'contact_card_1/subHeadingTitles',
        required_translations: `[
    
]`,
        script: `/**
 * @param {params} params
 * @param {api} params.api
 * @param {TransformApiHelpers} params.helpers
 */
function evaluateProperty({
    api,
    helpers
}) {
    let identity = api.data.identity_look_up_record.result;
    var properties = [{
        "label": identity.type.displayValue
    }, {
        "label": identity.department.displayValue,
        "clickable": true,
        "id": "account-link"
    }];

    return '';
}`,
        script_api_version: '2.0.0',
        sys_name: 'contact_card_1/subHeadingTitles',
        target: 'macroponent',
        type: 'transform',
    },
})
