import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['30d16fa247d1aa1051a3e84d416d435f'],
    table: 'sys_ux_screen',
    data: {
        active: true,
        app_config: '0bc12ba24bd1aa103c3cf11896fc02db',
        disable_auto_reflow: false,
        disable_interoperable: false,
        event_mappings: `[
    
]`,
        macroponent: '24d16fa247d1aa1051a3e84d416d435a',
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
        name: 'Risk Rule Record Page',
        order: 100,
        parent_macroponent: 'c276387cc331101080d6d3658940ddd2',
        required_translations: '[ ]',
        screen_condition: 'table=x_aleen_snguardian_risk_rule',
        screen_type: '36c12ba26ed1aa10694a39e7e21b81d0',
        sys_domain: 'global',
        sys_domain_path: '/',
    },
})
