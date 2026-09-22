import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['0a0ef4e01d2dda102ec055f449025cf1'],
    table: 'sys_ux_screen',
    data: {
        active: true,
        app_config: '860e38e0372dda10dd9c025dea500810',
        disable_auto_reflow: false,
        disable_interoperable: false,
        event_mappings: `[
    {
        "eventMappingId": "ckhffjjisfyaaaabboddhhhmwraaxeeaft",
        "isConfiguration": false,
        "offRowStorageId": null,
        "sourceEventApiName": "x_aleen_snguardian.NAV_ITEM_SELECTED_RELAY_420ef4e09d2dda1025caa2b3971470ee",
        "sourceEventCorrelationId": null,
        "sourceEventDefinition": {
            "apiName": "x_aleen_snguardian.NAV_ITEM_SELECTED_RELAY_420ef4e09d2dda1025caa2b3971470ee",
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
                            "external": {
                                "binding": {
                                    "address": [
                                        "external"
                                    ]
                                },
                                "type": "EVENT_PAYLOAD_BINDING"
                            },
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
                "targetId": "ckhffjjisfyaaaabbnddhhhmsoffggkjjsjj",
                "type": "EVENT"
            }
        ]
    }
]`,
        macroponent: '420ef4e09d2dda1025caa2b3971470ee',
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
    },
    "sysId": {
        "type": "JSON_LITERAL",
        "value": ""
    }
}`,
        name: 'Home default',
        order: 0,
        parent_macroponent: 'c276387cc331101080d6d3658940ddd2',
        required_translations: '[ ]',
        screen_type: '420e38e0e42dda107af3153628d1a505',
        sys_domain: 'global',
        sys_domain_path: '/',
    },
})
