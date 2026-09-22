import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['135c72621b314a90759455342a4bcbef'],
    table: 'sys_ux_screen',
    data: {
        active: true,
        app_config: '9524921c0b688e10ad8e1b4cf3cfc7ef',
        disable_auto_reflow: false,
        disable_interoperable: false,
        event_mappings: `[
    {
        "eventMappingId": "clvkxrxukaaddddcddffhhrwpqaavobm",
        "isConfiguration": false,
        "offRowStorageId": null,
        "sourceEventApiName": "x_aleen_snguardian.MODAL_SELECTED_RELAY_f25c72621b314a90759455342a4bcbc6",
        "sourceEventCorrelationId": null,
        "sourceEventDefinition": {
            "apiName": "x_aleen_snguardian.MODAL_SELECTED_RELAY_f25c72621b314a90759455342a4bcbc6",
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
                "targetId": "clvkxrxujaaddddbddffhhrfugpvdeef",
                "type": "EVENT"
            }
        ]
    }
]`,
        macroponent: 'f25c72621b314a90759455342a4bcbc6',
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
        name: 'Identity Asset',
        order: 100,
        parent_macroponent: 'c276387cc331101080d6d3658940ddd2',
        required_translations: '[ ]',
        screen_condition: 'table=x_aleen_snguardian_identity_asset',
        screen_type: 'd924921c29688e100bb553313ec215e4',
        sys_domain: 'global',
        sys_domain_path: '/',
    },
})
