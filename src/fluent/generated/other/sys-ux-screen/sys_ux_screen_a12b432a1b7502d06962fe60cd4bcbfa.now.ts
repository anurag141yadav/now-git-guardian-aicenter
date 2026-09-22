import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['a12b432a1b7502d06962fe60cd4bcbfa'],
    table: 'sys_ux_screen',
    data: {
        active: true,
        app_config: 'b51b0fe60c7502d007d435d03b9323f1',
        disable_auto_reflow: false,
        disable_interoperable: false,
        event_mappings: `[
    
]`,
        macroponent: 'ed2b432a1b7502d06962fe60cd4bcb6c',
        macroponent_config: `{
    "bare": {
        "type": "JSON_LITERAL",
        "value": true
    },
    "headerLevel": {
        "type": "JSON_LITERAL",
        "value": "1"
    },
    "headingOnlyVisibleToScreenReaders": {
        "type": "JSON_LITERAL",
        "value": false
    },
    "interceptNotifications": {
        "type": "JSON_LITERAL",
        "value": false
    },
    "label": {
        "type": "TRANSLATION_LITERAL",
        "value": {
            "code": null,
            "comment": "",
            "message": ""
        }
    },
    "propagateNotifications": {
        "type": "JSON_LITERAL",
        "value": false
    },
    "scrollable": {
        "type": "JSON_LITERAL",
        "value": "y"
    }
}`,
        name: 'Access Level Record Page',
        order: 100,
        parent_macroponent: 'c276387cc331101080d6d3658940ddd2',
        required_translations: '[ ]',
        screen_condition: 'table=x_aleen_snguardian_access_level',
        screen_type: '711b0fe65d7502d0b284a6d5078963e7',
        sys_domain: 'global',
        sys_domain_path: '/',
    },
})
