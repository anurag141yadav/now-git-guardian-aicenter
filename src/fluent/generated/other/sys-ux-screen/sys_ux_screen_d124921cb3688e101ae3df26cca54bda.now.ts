import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['d124921cb3688e101ae3df26cca54bda'],
    table: 'sys_ux_screen',
    data: {
        active: false,
        app_config: '9524921c0b688e10ad8e1b4cf3cfc7ef',
        disable_auto_reflow: false,
        disable_interoperable: false,
        event_mappings: `[
    {
        "eventMappingId": "clgwmclvxaaevjddbhhwjjiiygzrffx",
        "isConfiguration": false,
        "offRowStorageId": null,
        "sourceEventApiName": "sn_app_analytics_w.NAV_ITEM_SELECTED_RELAY_88cfd0cec3302010ec37e0dd9740dde6",
        "sourceEventCorrelationId": null,
        "sourceEventDefinition": {
            "apiName": "sn_app_analytics_w.NAV_ITEM_SELECTED_RELAY_88cfd0cec3302010ec37e0dd9740dde6",
            "id": null,
            "type": "UXEVENT"
        },
        "sourceEventSysId": null,
        "targets": [
            {
                "broker": null,
                "clientScript": null,
                "conditional": null,
                "declarativeAction": null,
                "event": {
                    "apiName": "sn_canvas_core.NAV_ITEM_SELECTED",
                    "payload": {
                        "container": {
                            "external": null,
                            "fields": {
                                "binding": {
                                    "address": [
                                        "fields"
                                    ]
                                },
                                "type": "EVENT_PAYLOAD_BINDING"
                            },
                            "multiInstField": {
                                "binding": {
                                    "address": [
                                        "multiInstField"
                                    ]
                                },
                                "type": "EVENT_PAYLOAD_BINDING"
                            },
                            "params": {
                                "binding": {
                                    "address": [
                                        "params"
                                    ]
                                },
                                "type": "EVENT_PAYLOAD_BINDING"
                            },
                            "passiveNavigation": {
                                "binding": {
                                    "address": [
                                        "passiveNavigation"
                                    ]
                                },
                                "type": "EVENT_PAYLOAD_BINDING"
                            },
                            "redirect": {
                                "binding": {
                                    "address": [
                                        "redirect"
                                    ]
                                },
                                "type": "EVENT_PAYLOAD_BINDING"
                            },
                            "route": {
                                "binding": {
                                    "address": [
                                        "route"
                                    ]
                                },
                                "type": "EVENT_PAYLOAD_BINDING"
                            },
                            "targetRoute": {
                                "binding": {
                                    "address": [
                                        "targetRoute"
                                    ]
                                },
                                "type": "EVENT_PAYLOAD_BINDING"
                            },
                            "title": {
                                "binding": {
                                    "address": [
                                        "title"
                                    ]
                                },
                                "type": "EVENT_PAYLOAD_BINDING"
                            }
                        },
                        "type": "MAP_CONTAINER"
                    },
                    "sysId": "8b82bf18e5276c8e423b6e4e0889b463"
                },
                "operation": null,
                "targetId": "clgwmclvxaaevkddbhhwjjzhhtfjccp",
                "type": "EVENT"
            }
        ]
    }
]`,
        macroponent: '88cfd0cec3302010ec37e0dd9740dde6',
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
        name: 'Analytics Center Default',
        order: 0,
        parent_macroponent: 'c276387cc331101080d6d3658940ddd2',
        required_translations: '[ ]',
        screen_type: 'd524921cb5688e10ec9f91e2d1fa4ae2',
        sys_domain: 'global',
        sys_domain_path: '/',
    },
})
