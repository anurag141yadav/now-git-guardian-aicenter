import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['19349a1c1b688e106962fe60cd4bcb04'],
    table: 'sys_ux_screen',
    data: {
        active: true,
        app_config: '9524921c0b688e10ad8e1b4cf3cfc7ef',
        disable_auto_reflow: false,
        disable_interoperable: false,
        event_mappings: `[
    
]`,
        macroponent: '05349a1c1b688e106962fe60cd4bcb00',
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
        screen_type: 'd924921c29688e100bb553313ec215e4',
        sys_domain: 'global',
        sys_domain_path: '/',
    },
})
