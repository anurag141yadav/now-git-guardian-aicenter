import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['14e6e3ae1bb14a90759455342a4bcbe4'],
    table: 'sys_ux_screen',
    data: {
        active: true,
        app_config: 'b51b0fe60c7502d007d435d03b9323f1',
        disable_auto_reflow: false,
        disable_interoperable: false,
        event_mappings: `[
    {
        "eventMappingId": "clvleeoypqaaccnhhddffhhrbbiiiihhmbbu",
        "isConfiguration": false,
        "offRowStorageId": null,
        "sourceEventApiName": "x_aleen_snguardian.MODAL_SELECTED_RELAY_ffd663ae1bb14a90759455342a4bcbd6",
        "sourceEventCorrelationId": null,
        "sourceEventDefinition": {
            "apiName": "x_aleen_snguardian.MODAL_SELECTED_RELAY_ffd663ae1bb14a90759455342a4bcbd6",
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
                "targetId": "clvleeoyppaaccnggddffhhrccgzsffqz",
                "type": "EVENT"
            }
        ]
    }
]`,
        macroponent: 'ffd663ae1bb14a90759455342a4bcbd6',
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
        name: 'Identity Asset Page',
        order: 100,
        parent_macroponent: 'c276387cc331101080d6d3658940ddd2',
        required_translations: '[ ]',
        screen_condition: 'table=x_aleen_snguardian_identity_asset',
        screen_type: '711b0fe65d7502d0b284a6d5078963e7',
        sys_domain: 'global',
        sys_domain_path: '/',
    },
})
