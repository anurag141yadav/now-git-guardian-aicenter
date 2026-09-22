import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['b92afd921b214a50759455342a4bcbe9'],
    table: 'sys_ux_screen',
    data: {
        active: true,
        app_config: 'd01af59249214a50816d9eb6f765698b',
        disable_auto_reflow: false,
        disable_interoperable: false,
        event_mappings: `[
    
]`,
        macroponent: '392afd921b214a50759455342a4bcbe5',
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
        name: 'Asset Location Record Page',
        order: 100,
        parent_macroponent: 'c276387cc331101080d6d3658940ddd2',
        required_translations: '[ ]',
        screen_condition: 'table=x_aleen_snguardian_asset_location',
        screen_type: '8c1af592eb214a509f6c6ac8a342dc80',
        sys_domain: 'global',
        sys_domain_path: '/',
    },
})
