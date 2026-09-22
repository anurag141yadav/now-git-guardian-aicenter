import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['338eb27b4738ea1051a3e84d416d43df'],
    table: 'sys_ux_macroponent',
    data: {
        associated_types: '',
        category: 'page',
        component_dependencies: '',
        composition: `[
    {
        "definition": {
            "id": "f552e6a932780394b6f06c14071aa115",
            "type": "MACROPONENT"
        },
        "elementId": "dashboard",
        "elementLabel": "Dashboard",
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
                            "sysId": "f78e767b4738ea1051a3e84d416d4394"
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
        "extensionPoints": [
            
        ],
        "isHero": false,
        "isHidden": {
            "type": "JSON_LITERAL",
            "value": null
        },
        "isNonDestructive": false,
        "items": [
            
        ],
        "overrides": null,
        "propertyValues": {
            "dashboardSysId": {
                "binding": {
                    "address": [
                        "sysId"
                    ],
                    "category": "props"
                },
                "type": "CONTEXT_BINDING"
            },
            "defaultDashboard": {
                "type": "JSON_LITERAL",
                "value": ""
            },
            "defaultDrilldowns": {
                "type": "JSON_LITERAL",
                "value": true
            },
            "editMode": {
                "binding": {
                    "address": [
                        "edit"
                    ],
                    "category": "props"
                },
                "type": "CONTEXT_BINDING"
            },
            "element": {
                "binding": {
                    "address": [
                        "element"
                    ],
                    "category": "props"
                },
                "type": "CONTEXT_BINDING"
            },
            "experienceId": {
                "binding": {
                    "address": [
                        "appId"
                    ],
                    "category": "app"
                },
                "type": "CONTEXT_BINDING"
            },
            "filterId": {
                "binding": {
                    "address": [
                        "filter"
                    ],
                    "category": "props"
                },
                "type": "CONTEXT_BINDING"
            },
            "globalFilters": {
                "binding": {
                    "address": [
                        "unifiedFilters"
                    ],
                    "category": "props"
                },
                "type": "CONTEXT_BINDING"
            },
            "hideCreateNewButton": {
                "type": "JSON_LITERAL",
                "value": false
            },
            "hideDashboardPicker": {
                "type": "JSON_LITERAL",
                "value": false
            },
            "hideEditButton": {
                "type": "JSON_LITERAL",
                "value": false
            },
            "hideHeader": {
                "type": "JSON_LITERAL",
                "value": false
            },
            "hideShareButton": {
                "type": "JSON_LITERAL",
                "value": false
            },
            "showPrintPreview": {
                "type": "JSON_LITERAL",
                "value": false
            },
            "tabSysId": {
                "binding": {
                    "address": [
                        "tabSysId"
                    ],
                    "category": "props"
                },
                "type": "CONTEXT_BINDING"
            },
            "userInfo": {
                "binding": {
                    "address": [
                        "user"
                    ],
                    "category": "session"
                },
                "type": "CONTEXT_BINDING"
            }
        },
        "slot": null,
        "styles": null
    }
]`,
        da_relay_models: '',
        data: `[
    
]`,
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
                "element_id": "dashboard",
                "styles": {
                    "height": ""
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
        name: 'Home',
        props: `[
    {
        "defaultValue": null,
        "description": "",
        "disabled": false,
        "fieldType": "string",
        "label": "Element",
        "mandatory": false,
        "name": "element",
        "readOnly": false,
        "selectable": false,
        "typeMetadata": null,
        "valueType": "string"
    },
    {
        "defaultValue": null,
        "description": "",
        "disabled": false,
        "fieldType": "string",
        "label": "filter",
        "mandatory": false,
        "name": "filter",
        "readOnly": false,
        "selectable": false,
        "typeMetadata": null,
        "valueType": "string"
    },
    {
        "defaultValue": null,
        "description": "",
        "disabled": false,
        "fieldType": "string",
        "label": "tabSysId",
        "mandatory": false,
        "name": "tabSysId",
        "readOnly": false,
        "selectable": false,
        "typeMetadata": null,
        "valueType": "string"
    },
    {
        "defaultValue": "",
        "description": "",
        "disabled": false,
        "fieldType": "string",
        "label": "Edit",
        "mandatory": false,
        "name": "edit",
        "readOnly": true,
        "selectable": false,
        "typeMetadata": null,
        "valueType": "string"
    },
    {
        "defaultValue": "",
        "description": "",
        "disabled": false,
        "fieldType": "string",
        "label": "sysId",
        "mandatory": false,
        "name": "sysId",
        "readOnly": true,
        "selectable": false,
        "typeMetadata": null,
        "valueType": "string"
    },
    {
        "description": "Unified Filters are sent to the dashboard serve as filters for the visualizations within the dashboard.\\n\\nExample: JSON.stringify({\\"encodedQueries\\":{\\"incident\\":\\"category=inquiry^state=7\\"},\\"parFilters\\":[{\\"order\\":0,\\"label\\":\\"Priority\\",\\"type\\":\\"choice\\",\\"apply_to\\":[\\"incident.priority\\"],\\"values\\":[\\"3\\",\\"5\\"]}]})",
        "fieldType": "json",
        "id": "unifiedFilters",
        "label": "unifiedFilters",
        "name": "unifiedFilters",
        "translatable": false
    }
]`,
        required_translations: '[ ]',
        root_component_config: '{}',
        schema_version: '1.0.0',
        state_properties: `[
    
]`,
    },
})
