import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['d81ef8e0332dda10bf1221382e5c7bcd'],
    table: 'sys_ux_screen',
    data: {
        active: true,
        app_config: '860e38e0372dda10dd9c025dea500810',
        disable_auto_reflow: false,
        disable_interoperable: false,
        event_mappings: `[
    
]`,
        macroponent: '181ef8e0332dda10bf1221382e5c7bc8',
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
        name: 'Visit Record Page',
        order: 100,
        parent_macroponent: 'c276387cc331101080d6d3658940ddd2',
        required_translations: '[ ]',
        screen_condition: 'table=x_aleen_snguardian_visitor_visit',
        screen_type: '8e0e38e0db2dda109ea6f8cb1e781704',
        sys_domain: 'global',
        sys_domain_path: '/',
    },
})
