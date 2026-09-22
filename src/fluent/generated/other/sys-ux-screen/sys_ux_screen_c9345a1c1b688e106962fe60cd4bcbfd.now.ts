import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['c9345a1c1b688e106962fe60cd4bcbfd'],
    table: 'sys_ux_screen',
    data: {
        active: true,
        app_config: '9524921c0b688e10ad8e1b4cf3cfc7ef',
        disable_auto_reflow: false,
        disable_interoperable: false,
        event_mappings: `[
    
]`,
        macroponent: '78345a1c1b688e106962fe60cd4bcbe0',
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
        name: 'Asset Record Page',
        order: 100,
        parent_macroponent: 'c276387cc331101080d6d3658940ddd2',
        required_translations: '[ ]',
        screen_condition: 'table=x_aleen_snguardian_asset',
        screen_type: 'd924921c29688e100bb553313ec215e4',
        sys_domain: 'global',
        sys_domain_path: '/',
    },
})
