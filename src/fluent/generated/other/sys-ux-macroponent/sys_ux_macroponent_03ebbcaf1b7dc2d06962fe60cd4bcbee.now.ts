import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['03ebbcaf1b7dc2d06962fe60cd4bcbee'],
    table: 'sys_ux_macroponent',
    data: {
        associated_types: '',
        category: 'page',
        component_dependencies: '',
        composition: `[
    {
        "definition": {
            "id": "2eda8d95aae6d05a26d94fbf692ac6f9",
            "type": "MACROPONENT"
        },
        "elementId": "iframe_1",
        "elementLabel": "iFrame 1",
        "eventMappings": [
            
        ],
        "isHidden": {
            "type": "JSON_LITERAL",
            "value": null
        },
        "preset": null,
        "propertyValues": {
            "disableSandbox": {
                "type": "JSON_LITERAL",
                "value": true
            },
            "height": {
                "type": "JSON_LITERAL",
                "value": "700"
            },
            "src": {
                "script": {
                    "apiVersion": "2.0.0",
                    "controllerElementId": null,
                    "inlineScript": "/**\\n  * @param {params} params\\n  * @param {api} params.api\\n  * @param {TransformApiHelpers} params.helpers\\n  */\\nfunction evaluateProperty({api, helpers}) {\\n\\treturn 'https://'+gs.getProperty('instance_name')+'.service-now.com/$map_page_primary.do?sysparm_sys_id='+api.context.props.sysId;\\n}",
                    "scriptSysId": "9ccdb8231bbdc2d06962fe60cd4bcb97",
                    "target": null
                },
                "type": "CLIENT_TRANSFORM_SCRIPT"
            },
            "title": {
                "type": "JSON_LITERAL",
                "value": "Wikipedia home page"
            },
            "width": {
                "type": "JSON_LITERAL",
                "value": "1600"
            }
        },
        "slot": null,
        "styles": null
    },
    {
        "definition": {
            "id": "d37ce8abca89d02905fed903c8e34d8e",
            "type": "MACROPONENT"
        },
        "elementId": "button_1",
        "elementLabel": "Button 1",
        "eventMappings": [
            {
                "eventMappingId": "clvowxwcnaaccsoddffiiffiircvbbpdda",
                "isConfiguration": false,
                "offRowStorageId": null,
                "sourceEventApiName": "sn_button.NOW_BUTTON#CLICKED",
                "sourceEventCorrelationId": null,
                "sourceEventDefinition": {
                    "apiName": "sn_button.NOW_BUTTON#CLICKED",
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
                            "apiName": "x_aleen_snguardian.MODAL_SELECTED_RELAY_03ebbcaf1b7dc2d06962fe60cd4bcbee",
                            "payload": {
                                "type": "JSON_LITERAL",
                                "value": {
                                    "bare": false,
                                    "displayOptions": null,
                                    "modalId": "[component-id$='iframe_2']",
                                    "showModal": true,
                                    "viewportElementId": null,
                                    "viewportFields": null,
                                    "viewportParams": null,
                                    "viewportRoute": null
                                }
                            },
                            "sysId": "10cdb8231bbdc2d06962fe60cd4bcb98"
                        },
                        "operation": null,
                        "targetId": "clvowxwcnaaccspddffiiffciikpeeqkb",
                        "type": "EVENT"
                    }
                ]
            }
        ],
        "isHidden": {
            "type": "JSON_LITERAL",
            "value": null
        },
        "preset": null,
        "propertyValues": {
            "configAria": {
                "type": "JSON_LITERAL",
                "value": {}
            },
            "disabled": {
                "type": "JSON_LITERAL",
                "value": false
            },
            "icon": {
                "type": "JSON_LITERAL",
                "value": null
            },
            "label": {
                "type": "JSON_LITERAL",
                "value": "Button"
            },
            "size": {
                "type": "JSON_LITERAL",
                "value": "md"
            },
            "tooltipContent": {
                "type": "JSON_LITERAL",
                "value": "Enter a label"
            },
            "variant": {
                "type": "JSON_LITERAL",
                "value": "secondary"
            }
        },
        "slot": null,
        "styles": null
    },
    {
        "definition": {
            "id": "e80108425b101010b913cbd59b81c771",
            "type": "MACROPONENT"
        },
        "elementId": "iframe_2",
        "elementLabel": "Iframe 2",
        "eventMappings": [
            
        ],
        "isHidden": {
            "type": "JSON_LITERAL",
            "value": null
        },
        "preset": null,
        "propertyValues": {
            "defer": {
                "type": "JSON_LITERAL",
                "value": true
            },
            "disableSandbox": {
                "type": "JSON_LITERAL",
                "value": false
            },
            "enableResizable": {
                "type": "JSON_LITERAL",
                "value": false
            },
            "headerLabel": {
                "type": "TRANSLATION_LITERAL",
                "value": {
                    "code": null,
                    "comment": "",
                    "message": "Modal header"
                }
            },
            "params": {
                "type": "JSON_LITERAL",
                "value": null
            },
            "resizableMaxHeight": {
                "type": "JSON_LITERAL",
                "value": null
            },
            "resizableMaxWidth": {
                "type": "JSON_LITERAL",
                "value": null
            },
            "resizableMinHeight": {
                "type": "JSON_LITERAL",
                "value": 133
            },
            "resizableMinWidth": {
                "type": "JSON_LITERAL",
                "value": 420
            },
            "size": {
                "type": "JSON_LITERAL",
                "value": "md"
            },
            "src": {
                "script": {
                    "apiVersion": "2.0.0",
                    "controllerElementId": null,
                    "inlineScript": "/**\\n  * @param {params} params\\n  * @param {api} params.api\\n  * @param {TransformApiHelpers} params.helpers\\n  */\\nfunction evaluateProperty({api, helpers}) {\\n\\treturn 'done';\\n}",
                    "scriptSysId": "dccdb8231bbdc2d06962fe60cd4bcb97",
                    "target": null
                },
                "type": "CLIENT_TRANSFORM_SCRIPT"
            }
        },
        "slot": null,
        "styles": null
    }
]`,
        da_relay_models: '',
        disable_auto_reflow: false,
        dispatched_events: '10cdb8231bbdc2d06962fe60cd4bcb98',
        extends: '19be392623033300f4b4c50947bf65ba',
        handled_events: '',
        interfaces: '',
        internal_event_mappings: '{}',
        layout: `{
    "default": {
        "children": null,
        "items": [
            {
                "element_id": "iframe_1",
                "styles": {}
            },
            {
                "element_id": "button_1",
                "styles": {}
            }
        ],
        "root": null,
        "rules": null,
        "styles": {
            "flex-direction": "column"
        },
        "templateId": "5832fd4d53c31010e6bcddeeff7b12db",
        "type": "flex"
    },
    "version": "3.0.0"
}`,
        macroponent_dependencies: '',
        name: 'Location Map Page',
        props: `[
    {
        "defaultValue": "",
        "description": null,
        "disabled": false,
        "fieldType": "string",
        "label": "Table",
        "mandatory": false,
        "name": "table",
        "readOnly": true,
        "selectable": false,
        "typeMetadata": null,
        "valueType": "string"
    },
    {
        "defaultValue": "",
        "description": null,
        "disabled": false,
        "fieldType": "string",
        "label": "sysId",
        "mandatory": false,
        "name": "sysId",
        "readOnly": true,
        "selectable": false,
        "typeMetadata": null,
        "valueType": "string"
    }
]`,
        required_translations: `[ {
  "message" : "Modal header",
  "comment" : ""
} ]`,
        schema_version: '1.0.0',
    },
})
