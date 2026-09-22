import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['d5b939521b214a50759455342a4bcbe4'],
    table: 'sys_ux_screen',
    data: {
        active: true,
        app_config: '7ea9b552c4214a5052870216b6a84a6b',
        disable_auto_reflow: false,
        disable_interoperable: false,
        event_mappings: `[
    
]`,
        macroponent: '05b939521b214a50759455342a4bcbdf',
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
        name: 'Review Record Page',
        order: 100,
        parent_macroponent: 'c276387cc331101080d6d3658940ddd2',
        required_translations: '[ ]',
        screen_condition: 'table=x_aleen_snguardian_review',
        screen_type: '3aa9b55203214a506977b679ca388661',
        sys_domain: 'global',
        sys_domain_path: '/',
    },
})
