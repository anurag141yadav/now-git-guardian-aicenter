import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['bfca1e671b3506d06962fe60cd4bcb76'],
    table: 'sys_ux_macroponent',
    data: {
        associated_types: '',
        category: 'page',
        component_dependencies: '',
        composition: `[
    {
        "elementId": "dashboard_1",
        "elementLabel": "Dashboard 1",
        "propertyValues": {
            "userInfo": {
                "type": "CONTEXT_BINDING",
                "binding": {
                    "address": [
                        "user"
                    ],
                    "category": "session"
                }
            },
            "hideHeader": {
                "type": "JSON_LITERAL",
                "value": false
            },
            "hideShareButton": {
                "type": "JSON_LITERAL",
                "value": false
            },
            "hideCreateNewButton": {
                "type": "JSON_LITERAL",
                "value": false
            },
            "hideEditButton": {
                "type": "JSON_LITERAL",
                "value": false
            },
            "defaultDashboard": {
                "type": "JSON_LITERAL",
                "value": ""
            },
            "hideDashboardPicker": {
                "type": "JSON_LITERAL",
                "value": false
            },
            "experienceId": {
                "type": "CONTEXT_BINDING",
                "binding": {
                    "address": [
                        "appId"
                    ],
                    "category": "app"
                }
            },
            "showPrintPreview": {
                "type": "JSON_LITERAL",
                "value": false
            },
            "filterId": {
                "type": "CONTEXT_BINDING",
                "binding": {
                    "address": [
                        "filter"
                    ],
                    "category": "props"
                }
            },
            "editMode": {
                "type": "CONTEXT_BINDING",
                "binding": {
                    "address": [
                        "edit"
                    ],
                    "category": "props"
                }
            },
            "tabSysId": {
                "type": "CONTEXT_BINDING",
                "binding": {
                    "address": [
                        "tabSysId"
                    ],
                    "category": "props"
                }
            },
            "dashboardSysId": {
                "type": "CONTEXT_BINDING",
                "binding": {
                    "address": [
                        "sysId"
                    ],
                    "category": "props"
                }
            },
            "defaultDrilldowns": {
                "type": "JSON_LITERAL",
                "value": true
            },
            "element": {
                "type": "CONTEXT_BINDING",
                "binding": {
                    "address": [
                        "element"
                    ],
                    "category": "props"
                }
            }
        },
        "eventMappings": [
            {
                "eventMappingId": "claagnddeeoqaacciirddwggyggoqshhikii",
                "isConfiguration": false,
                "offRowStorageId": null,
                "sourceEventApiName": "sn_dashboard.DASHBOARD_DESIGNER#REDIRECT_DASHBOARDS_OVERVIEW",
                "sourceEventCorrelationId": null,
                "sourceEventDefinition": {
                    "apiName": "sn_dashboard.DASHBOARD_DESIGNER#REDIRECT_DASHBOARDS_OVERVIEW",
                    "id": null,
                    "type": "UXEVENT"
                },
                "sourceEventSysId": null,
                "targets": [
                    {
                        "broker": null,
                        "clientScript": {
                            "sysId": "ccda92a71b3506d06962fe60cd4bcb86"
                        },
                        "conditional": null,
                        "declarativeAction": null,
                        "event": null,
                        "operation": null,
                        "targetId": "claagnddeeoqaacciisddwggyddkfaaffxig",
                        "type": "CLIENT_SCRIPT"
                    }
                ]
            }
        ],
        "slot": null,
        "definition": {
            "id": "f552e6a932780394b6f06c14071aa115",
            "type": "MACROPONENT"
        },
        "overrides": null,
        "isHidden": {
            "type": "JSON_LITERAL",
            "value": null
        },
        "isHero": false,
        "extensionPoints": [
            
        ],
        "isNonDestructive": false,
        "items": [
            
        ],
        "styles": null
    },
    {
        "definition": {
            "id": "2eda8d95aae6d05a26d94fbf692ac6f9",
            "type": "MACROPONENT"
        },
        "elementLabel": "iFrame 1",
        "elementId": "iframe_1",
        "eventMappings": [
            
        ],
        "propertyValues": {
            "title": {
                "type": "JSON_LITERAL",
                "value": "Wikipedia home page"
            },
            "src": {
                "type": "CLIENT_TRANSFORM_SCRIPT",
                "script": {
                    "apiVersion": "2.0.0",
                    "controllerElementId": null,
                    "inlineScript": "/**\\n  * @param {params} params\\n  * @param {api} params.api\\n  * @param {TransformApiHelpers} params.helpers\\n  */\\nfunction evaluateProperty({api, helpers}) {\\n  var instName = window.location.href;\\n\\treturn instName;\\n}",
                    "scriptSysId": "a5c856b71b3546d06962fe60cd4bcbf3",
                    "target": null
                }
            },
            "width": {
                "type": "JSON_LITERAL",
                "value": ""
            },
            "height": {
                "type": "JSON_LITERAL",
                "value": ""
            },
            "disableSandbox": {
                "type": "JSON_LITERAL",
                "value": true
            }
        },
        "isHidden": {
            "type": "JSON_LITERAL",
            "value": null
        },
        "preset": null,
        "slot": null,
        "styles": null
    }
]`,
        da_relay_models: '',
        description:
            'Provides the ability to display multiple kinds of information, including data visualizations, filters, and text on a single screen with one or more tabs. Use dashboards to create a story with data that you can share with multiple users.',
        disable_auto_reflow: false,
        dispatched_events: '166595d6b70201109fda8079ce11a904',
        extends: '19be392623033300f4b4c50947bf65ba',
        handled_events: '',
        interfaces: '',
        internal_event_mappings: '{}',
        layout: `{
    "default": {
        "children": null,
        "isInline": null,
        "items": [
            {
                "element_id": "dashboard_1",
                "styles": {
                    "height": "10vh",
                    "width": "100%"
                }
            },
            {
                "element_id": "iframe_1",
                "styles": {
                    "width": "100vw",
                    "height": "100vh",
                    "min-width": "100vw",
                    "min-height": "100vh",
                    "margin-top": "var(--now-scalable-space--xxl)"
                }
            }
        ],
        "root": null,
        "rules": null,
        "styles": {
            "flex-direction": "column",
            "height": "100%"
        },
        "templateId": "5832fd4d53c31010e6bcddeeff7b12db",
        "type": "flex"
    },
    "version": "3.0.0"
}`,
        macroponent_dependencies: '',
        name: 'Location Dashboards Default copy',
        props: `[
    {
        "name": "element",
        "label": "Element",
        "fieldType": "string",
        "typeMetadata": null,
        "valueType": "string",
        "mandatory": false,
        "defaultValue": null,
        "description": "",
        "readOnly": false,
        "selectable": false,
        "disabled": false
    },
    {
        "name": "filter",
        "label": "filter",
        "fieldType": "string",
        "typeMetadata": null,
        "valueType": "string",
        "mandatory": false,
        "defaultValue": null,
        "description": "",
        "readOnly": false,
        "selectable": false,
        "disabled": false
    },
    {
        "name": "tabSysId",
        "label": "tabSysId",
        "fieldType": "string",
        "typeMetadata": null,
        "valueType": "string",
        "mandatory": false,
        "defaultValue": null,
        "description": "",
        "readOnly": false,
        "selectable": false,
        "disabled": false
    },
    {
        "name": "edit",
        "label": "Edit",
        "fieldType": "string",
        "typeMetadata": null,
        "valueType": "string",
        "mandatory": false,
        "defaultValue": "",
        "description": "",
        "readOnly": true,
        "selectable": false,
        "disabled": false
    },
    {
        "name": "sysId",
        "label": "sysId",
        "fieldType": "string",
        "typeMetadata": null,
        "valueType": "string",
        "mandatory": false,
        "defaultValue": "",
        "description": "",
        "readOnly": true,
        "selectable": false,
        "disabled": false
    }
]`,
        required_translations: '[ ]',
        root_component_config: '{}',
        schema_version: '1.0.0',
        state_properties: `[
    
]`,
    },
})
