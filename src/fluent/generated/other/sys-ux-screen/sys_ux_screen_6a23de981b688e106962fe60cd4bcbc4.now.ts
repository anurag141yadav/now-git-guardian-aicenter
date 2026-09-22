import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['6a23de981b688e106962fe60cd4bcbc4'],
    table: 'sys_ux_screen',
    data: {
        active: true,
        disable_auto_reflow: false,
        disable_interoperable: false,
        event_mappings: `[
    
]`,
        macroponent: '6623de981b688e106962fe60cd4bcbc0',
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
        screen_type: 'b3131e9860688e10ca75a7b4bae48914',
        sys_domain: 'global',
        sys_domain_path: '/',
    },
})
