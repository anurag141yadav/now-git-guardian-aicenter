import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['aaa9b55200214a50ea71a34df2e75756'],
    table: 'sys_ux_screen',
    data: {
        active: true,
        app_config: '7ea9b552c4214a5052870216b6a84a6b',
        disable_auto_reflow: false,
        disable_interoperable: false,
        event_mappings: `[
    {
        "eventMappingId": "clgwmwhhiaaawiieeddbhhwcjvmohhwk",
        "isConfiguration": false,
        "offRowStorageId": null,
        "sourceEventApiName": "sn_app_analytics_w.NAV_ITEM_SELECTED_RELAY_ed7ad8a1c313101001a6e0dd9740ddd1",
        "sourceEventCorrelationId": null,
        "sourceEventSysId": null,
        "targets": [
            {
                "targetId": "clgwmwhhiaaawiiffddbhhwpggghccqjl",
                "type": "EVENT",
                "declarativeAction": null,
                "event": {
                    "sysId": "8b82bf18e5276c8e423b6e4e0889b463",
                    "payload": {
                        "type": "MAP_CONTAINER",
                        "container": {
                            "route": {
                                "type": "EVENT_PAYLOAD_BINDING",
                                "binding": {
                                    "address": [
                                        "route"
                                    ]
                                }
                            },
                            "fields": {
                                "type": "EVENT_PAYLOAD_BINDING",
                                "binding": {
                                    "address": [
                                        "fields"
                                    ]
                                }
                            },
                            "params": {
                                "type": "EVENT_PAYLOAD_BINDING",
                                "binding": {
                                    "address": [
                                        "params"
                                    ]
                                }
                            },
                            "redirect": {
                                "type": "EVENT_PAYLOAD_BINDING",
                                "binding": {
                                    "address": [
                                        "redirect"
                                    ]
                                }
                            },
                            "passiveNavigation": {
                                "type": "EVENT_PAYLOAD_BINDING",
                                "binding": {
                                    "address": [
                                        "passiveNavigation"
                                    ]
                                }
                            },
                            "title": {
                                "type": "EVENT_PAYLOAD_BINDING",
                                "binding": {
                                    "address": [
                                        "title"
                                    ]
                                }
                            },
                            "multiInstField": {
                                "type": "EVENT_PAYLOAD_BINDING",
                                "binding": {
                                    "address": [
                                        "multiInstField"
                                    ]
                                }
                            },
                            "targetRoute": {
                                "type": "EVENT_PAYLOAD_BINDING",
                                "binding": {
                                    "address": [
                                        "targetRoute"
                                    ]
                                }
                            },
                            "external": null
                        }
                    },
                    "apiName": "sn_canvas_core.NAV_ITEM_SELECTED"
                },
                "operation": null,
                "clientScript": null,
                "conditional": null,
                "broker": null
            }
        ],
        "sourceEventDefinition": {
            "id": null,
            "apiName": "sn_app_analytics_w.NAV_ITEM_SELECTED_RELAY_ed7ad8a1c313101001a6e0dd9740ddd1",
            "type": "UXEVENT"
        }
    }
]`,
        macroponent: 'ed7ad8a1c313101001a6e0dd9740ddd1',
        macroponent_config: `{
    "label": {
        "type": "TRANSLATION_LITERAL",
        "value": {
            "code": null,
            "message": "",
            "comment": ""
        }
    },
    "bare": {
        "type": "JSON_LITERAL",
        "value": true
    },
    "scrollable": {
        "type": "JSON_LITERAL",
        "value": "y"
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
    "propagateNotifications": {
        "type": "JSON_LITERAL",
        "value": false
    }
}`,
        name: 'KPI Details Default',
        order: 0,
        parent_macroponent: 'c276387cc331101080d6d3658940ddd2',
        required_translations: '[ ]',
        screen_type: 'fea9b55253214a509d117d5288910a5d',
        sys_domain: 'global',
        sys_domain_path: '/',
    },
})
