import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['fac12ba28fd1aa10aaa731ee15b887c5'],
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
                "eventMappingId": "clqddmffjjaamaabbwhddbhhruzsxvtdo",
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
                        "clientScript": null,
                        "conditional": null,
                        "declarativeAction": null,
                        "event": {
                            "apiName": "x_aleen_snguardian.NAV_ITEM_SELECTED_RELAY_fac12ba28fd1aa10aaa731ee15b887c5",
                            "payload": {
                                "container": {
                                    "external": {
                                        "type": "JSON_LITERAL",
                                        "value": null
                                    },
                                    "fields": {
                                        "type": "JSON_LITERAL",
                                        "value": null
                                    },
                                    "multiInstField": {
                                        "type": "JSON_LITERAL",
                                        "value": null
                                    },
                                    "navigationOptions": {
                                        "type": "JSON_LITERAL",
                                        "value": null
                                    },
                                    "params": {
                                        "container": {
                                            "sysId": {
                                                "type": "JSON_LITERAL",
                                                "value": "b6c12ba2a1d1aa1073adb3908afa5ad4"
                                            }
                                        },
                                        "type": "MAP_CONTAINER"
                                    },
                                    "passiveNavigation": {
                                        "type": "JSON_LITERAL",
                                        "value": null
                                    },
                                    "redirect": {
                                        "type": "JSON_LITERAL",
                                        "value": null
                                    },
                                    "route": {
                                        "type": "JSON_LITERAL",
                                        "value": "home"
                                    },
                                    "targetRoute": {
                                        "type": "JSON_LITERAL",
                                        "value": null
                                    },
                                    "title": {
                                        "type": "JSON_LITERAL",
                                        "value": null
                                    }
                                },
                                "type": "MAP_CONTAINER"
                            },
                            "sysId": "fac12ba22ad1aa10d40e8977c822e0cc"
                        },
                        "operation": null,
                        "targetId": "clqddmffjjaamaabbwiddbhhrccczffiiajjee",
                        "type": "EVENT"
                    }
                ]
            },
            {
                "eventMappingId": "clqddofotmaabbvoddbhhrtuwqthffjj",
                "isConfiguration": false,
                "offRowStorageId": null,
                "sourceEventApiName": "sn_dashboard.DASHBOARD_DESIGNER#WIDGET_CLICKED",
                "sourceEventCorrelationId": null,
                "sourceEventDefinition": {
                    "apiName": "sn_dashboard.DASHBOARD_DESIGNER#WIDGET_CLICKED",
                    "id": null,
                    "type": "UXEVENT"
                },
                "sourceEventSysId": null,
                "targets": [
                    {
                        "broker": null,
                        "clientScript": {
                            "payload": {
                                "type": "JSON_LITERAL",
                                "value": {}
                            },
                            "sysId": "5111cc1ab90f7110f877adf4836aee8c"
                        },
                        "conditional": null,
                        "declarativeAction": null,
                        "event": null,
                        "operation": null,
                        "targetId": "clqddofotmaabbvpddbhhrhhlgioqdy",
                        "type": "CLIENT_SCRIPT"
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
                "value": "b6c12ba2a1d1aa1073adb3908afa5ad4"
            },
            "defaultDrilldowns": {
                "type": "JSON_LITERAL",
                "value": true
            },
            "editMode": {
                "type": "JSON_LITERAL",
                "value": ""
            },
            "element": {
                "type": "JSON_LITERAL",
                "value": null
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
                "type": "JSON_LITERAL",
                "value": null
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
            "queryInactive": {
                "type": "JSON_LITERAL",
                "value": false
            },
            "showPrintPreview": {
                "type": "JSON_LITERAL",
                "value": false
            },
            "tabSysId": {
                "type": "JSON_LITERAL",
                "value": ""
            },
            "useAsEmbedded": {
                "type": "JSON_LITERAL",
                "value": false
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
        disable_auto_reflow: false,
        dispatched_events: 'fac12ba22ad1aa10d40e8977c822e0cc',
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
                "styles": {}
            }
        ],
        "root": null,
        "rules": null,
        "styles": {
            "grid-gap": "var(--now-static-space--lg)",
            "grid-template-areas": "\\"main\\"",
            "grid-template-columns": "1fr",
            "grid-template-rows": "minmax(400px,auto)",
            "height": "100%"
        },
        "templateId": "28bde4cd53431010e6bcddeeff7b12cc",
        "type": "grid"
    },
    "version": "3.0.0"
}`,
        macroponent_dependencies: '',
        name: 'Home',
        props: `[
    {
        "description": null,
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
        "description": "",
        "fieldType": "string",
        "id": "cliuffjeeojjaaddodddbhhzhwlvmfflr",
        "inherited": false,
        "label": "Edit",
        "mandatory": false,
        "name": "edit",
        "readOnly": false,
        "selectable": false,
        "typeMetadata": null,
        "valueType": "string"
    }
]`,
        required_translations: '[ ]',
        root_component_config: '{}',
        schema_version: '1.0.0',
        state_properties: `[
    
]`,
    },
})
