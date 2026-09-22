import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['9b55b2f21b7542d06962fe60cd4bcb19'],
    table: 'sys_ux_client_script',
    data: {
        macroponent: 'c12b432a1b7502d06962fe60cd4bcb2d',
        name: 'contact_card_1/content',
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
    var identity = api.data.identity_look_up_record.result;
    var heading = [{
        "label": "Name",
        "value": identity.first_name.displayValue + " " + identity.last_name.displayValue,
        "clickable": true,
        "id": "phone-link"
    },{
        "label": "Mobile Phone",
        "value": identity.phone.displayValue,
        "clickable": true,
        "id": "mobile-link"
    }, {
        "label": "Manager",
        "value": identity.manager.displayValue,
        "clickable": true,
        "id": "phone-link"
    }, {
        "label": "Email",
        "value": identity.email.displayValue,
        "clickable": true,
        "id": "email-link"
    }];
    return heading;
}`,
        script_api_version: '2.0.0',
        sys_name: 'contact_card_1/content',
        target: 'macroponent',
        type: 'transform',
    },
})
