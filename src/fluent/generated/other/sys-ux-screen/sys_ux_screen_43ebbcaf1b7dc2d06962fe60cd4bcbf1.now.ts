import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['43ebbcaf1b7dc2d06962fe60cd4bcbf1'],
    table: 'sys_ux_screen',
    data: {
        active: true,
        app_config: 'b51b0fe60c7502d007d435d03b9323f1',
        disable_auto_reflow: false,
        disable_interoperable: false,
        event_mappings: `[
    {
        "eventMappingId": "clvowyrjjjjaaccthhddffiiffjjkggiiinlv",
        "isConfiguration": false,
        "offRowStorageId": null,
        "sourceEventApiName": "x_aleen_snguardian.MODAL_SELECTED_RELAY_03ebbcaf1b7dc2d06962fe60cd4bcbee",
        "sourceEventCorrelationId": null,
        "sourceEventDefinition": {
            "apiName": "x_aleen_snguardian.MODAL_SELECTED_RELAY_03ebbcaf1b7dc2d06962fe60cd4bcbee",
            "id": null,
            "type": "UXEVENT"
        },
        "sourceEventSysId": null,
        "targets": [
            {
                "broker": null,
                "clientScript": null,
                "clientTransformScript": null,
                "clientTransformScriptUxValue": null,
                "conditional": null,
                "declarativeAction": null,
                "event": {
                    "apiName": "sn_canvas_core.MODAL_SELECTED",
                    "payload": {
                        "container": {
                            "bare": {
                                "binding": {
                                    "address": [
                                        "bare"
                                    ]
                                },
                                "type": "EVENT_PAYLOAD_BINDING"
                            },
                            "displayOptions": {
                                "binding": {
                                    "address": [
                                        "displayOptions"
                                    ]
                                },
                                "type": "EVENT_PAYLOAD_BINDING"
                            },
                            "modalId": {
                                "binding": {
                                    "address": [
                                        "modalId"
                                    ]
                                },
                                "type": "EVENT_PAYLOAD_BINDING"
                            },
                            "showModal": {
                                "binding": {
                                    "address": [
                                        "showModal"
                                    ]
                                },
                                "type": "EVENT_PAYLOAD_BINDING"
                            },
                            "viewportElementId": {
                                "binding": {
                                    "address": [
                                        "viewportElementId"
                                    ]
                                },
                                "type": "EVENT_PAYLOAD_BINDING"
                            },
                            "viewportFields": {
                                "binding": {
                                    "address": [
                                        "viewportFields"
                                    ]
                                },
                                "type": "EVENT_PAYLOAD_BINDING"
                            },
                            "viewportParams": {
                                "binding": {
                                    "address": [
                                        "viewportParams"
                                    ]
                                },
                                "type": "EVENT_PAYLOAD_BINDING"
                            },
                            "viewportRoute": {
                                "binding": {
                                    "address": [
                                        "viewportRoute"
                                    ]
                                },
                                "type": "EVENT_PAYLOAD_BINDING"
                            }
                        },
                        "type": "MAP_CONTAINER"
                    },
                    "sysId": "882eed4091382d3a41f1bb3f382ae089"
                },
                "operation": null,
                "targetId": "clvowyrjjiiaacctggddffiiffqddiihhqwvgg",
                "type": "EVENT"
            }
        ]
    }
]`,
        macroponent: '03ebbcaf1b7dc2d06962fe60cd4bcbee',
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
        "type": "JSON_LITERAL",
        "value": ""
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
        name: 'Location Map Page',
        order: 0,
        parent_macroponent: 'c276387cc331101080d6d3658940ddd2',
        required_translations: '[ ]',
        screen_type: '8feb3caf1b7dc2d06962fe60cd4bcb3b',
        sys_domain: 'global',
        sys_domain_path: '/',
    },
})
