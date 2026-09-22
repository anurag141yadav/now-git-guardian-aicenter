import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['c81af59272214a507ef09a7cb565ab77'],
    table: 'sys_ux_screen',
    data: {
        active: true,
        app_config: 'd01af59249214a50816d9eb6f765698b',
        disable_auto_reflow: false,
        disable_interoperable: false,
        event_mappings: `[
    {
        "eventMappingId": "ckhffjjisfyaaaabboddhhhmwraaxeeaft",
        "isConfiguration": false,
        "offRowStorageId": null,
        "sourceEventApiName": "x_aleen_snguardian.NAV_ITEM_SELECTED_RELAY_841af592c0214a50719310ff8759777c",
        "sourceEventCorrelationId": null,
        "sourceEventDefinition": {
            "apiName": "x_aleen_snguardian.NAV_ITEM_SELECTED_RELAY_841af592c0214a50719310ff8759777c",
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
        macroponent: '841af592c0214a50719310ff8759777c',
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
        screen_type: '0c1af592d4214a50bfc06947c732da7f',
        sys_domain: 'global',
        sys_domain_path: '/',
    },
})
