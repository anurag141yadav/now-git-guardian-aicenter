import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['322312d81b688e106962fe60cd4bcb86'],
    table: 'sys_ux_screen',
    data: {
        active: true,
        disable_auto_reflow: false,
        disable_interoperable: false,
        event_mappings: `[
    
]`,
        macroponent: 'f223de981b688e106962fe60cd4bcbc7',
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
        name: 'Badge Template Record Page',
        order: 100,
        parent_macroponent: 'c276387cc331101080d6d3658940ddd2',
        required_translations: '[ ]',
        screen_condition: 'table=x_aleen_snguardian_badge_template',
        screen_type: 'b3131e9860688e10ca75a7b4bae48914',
        sys_domain: 'global',
        sys_domain_path: '/',
    },
})
