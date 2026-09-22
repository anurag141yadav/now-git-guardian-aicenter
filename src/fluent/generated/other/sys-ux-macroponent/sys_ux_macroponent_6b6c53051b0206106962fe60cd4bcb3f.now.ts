import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['6b6c53051b0206106962fe60cd4bcb3f'],
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
                            "sysId": "6f6c53051b0206106962fe60cd4bcb49"
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
        "styles": {
            "height": ""
        }
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
                "styles": {}
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
        name: 'Default',
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
