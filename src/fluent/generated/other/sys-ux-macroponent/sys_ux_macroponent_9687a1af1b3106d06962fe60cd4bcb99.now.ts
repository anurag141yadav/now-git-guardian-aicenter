import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['9687a1af1b3106d06962fe60cd4bcb99'],
    table: 'sys_ux_macroponent',
    data: {
        associated_types: '',
        category: 'page',
        component_dependencies: '',
        composition: `[
    {
        "definition": {
            "id": "b324da974cef96f2db1d484cfeda4e3e",
            "type": "MACROPONENT_VIEWPORT"
        },
        "elementId": "tabs_1",
        "elementLabel": "Tabs 1",
        "eventMappings": [
            
        ],
        "extensionPoints": [
            
        ],
        "isHidden": {
            "type": "JSON_LITERAL",
            "value": null
        },
        "items": [
            {
                "icon": "chart-geomap-fill",
                "id": "clvp2ykw80b3g357r5f1bbydz",
                "label": {
                    "type": "TRANSLATION_LITERAL",
                    "value": {
                        "code": null,
                        "comment": "",
                        "message": "Location Map"
                    }
                },
                "order": 100,
                "type": "local"
            }
        ],
        "overrides": {
            "composition": [
                {
                    "definition": {
                        "id": "d356d14b6e293a3020a244b63d278d8f",
                        "type": "MACROPONENT"
                    },
                    "elementId": "clvpccykwiiaabddhddffhhrdhhfbbxvhi",
                    "elementLabel": "Location Map",
                    "eventMappings": [
                        
                    ],
                    "isHidden": {
                        "type": "JSON_LITERAL",
                        "value": null
                    },
                    "name": "Untitled Tab",
                    "overrides": {
                        "composition": [
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
                                        "value": ""
                                    },
                                    "src": {
                                        "type": "JSON_LITERAL",
                                        "value": ""
                                    },
                                    "title": {
                                        "type": "JSON_LITERAL",
                                        "value": "Wikipedia home page"
                                    },
                                    "width": {
                                        "type": "JSON_LITERAL",
                                        "value": ""
                                    }
                                },
                                "slot": null,
                                "styles": null
                            }
                        ],
                        "layout": {
                            "default": {
                                "children": null,
                                "items": [
                                    {
                                        "element_id": "iframe_1",
                                        "styles": {
                                            "height": "100vh",
                                            "min-height": "100vh",
                                            "min-width": "100vw",
                                            "width": "100vw"
                                        }
                                    }
                                ],
                                "root": null,
                                "rules": null,
                                "styles": {
                                    "min-height": "300px",
                                    "width": "100%"
                                },
                                "templateId": "5832fd4d53c31010e6bcddeeff7b12db",
                                "type": "flex"
                            },
                            "version": "3.0.0"
                        }
                    },
                    "preset": null,
                    "propertyValues": {
                        "ariaRegionHeadingLevel": {
                            "type": "JSON_LITERAL",
                            "value": "1"
                        },
                        "ariaRegionName": {
                            "type": "TRANSLATION_LITERAL",
                            "value": {
                                "code": null,
                                "comment": "",
                                "message": ""
                            }
                        },
                        "ariaRole": {
                            "type": "JSON_LITERAL",
                            "value": ""
                        },
                        "hideEmptyStateUi": {
                            "type": "JSON_LITERAL",
                            "value": true
                        },
                        "includeAriaHeading": {
                            "type": "JSON_LITERAL",
                            "value": false
                        },
                        "slotWrapperBehavior": {
                            "type": "JSON_LITERAL",
                            "value": "fullheight"
                        },
                        "type": {
                            "type": "JSON_LITERAL",
                            "value": "section"
                        }
                    },
                    "slot": "clvp2ykw80b3g357r5f1bbydz",
                    "styles": null
                }
            ],
            "layout": null
        },
        "preset": null,
        "propertyValues": {
            "activeRoute": {
                "icon": "",
                "id": "clvp2ykw80b3g357r5f1bbydz",
                "label": "Untitled Tab",
                "order": 100,
                "type": "local"
            },
            "ariaLabel": {
                "type": "JSON_LITERAL",
                "value": ""
            },
            "defaultRoute": {
                "type": "JSON_LITERAL",
                "value": null
            },
            "dynamicTabData": {
                "type": "JSON_LITERAL",
                "value": null
            },
            "enableCollapsing": {
                "type": "JSON_LITERAL",
                "value": false
            },
            "fixedWidth": {
                "type": "JSON_LITERAL",
                "value": false
            },
            "hideLabel": {
                "type": "JSON_LITERAL",
                "value": false
            },
            "initiallyCollapsed": {
                "type": "JSON_LITERAL",
                "value": false
            },
            "items": {
                "type": "JSON_LITERAL",
                "value": [
                    
                ]
            },
            "maxWidth": {
                "type": "JSON_LITERAL",
                "value": 240
            },
            "position": {
                "type": "JSON_LITERAL",
                "value": "top"
            },
            "selectedTabIndex": {
                "type": "JSON_LITERAL",
                "value": null
            },
            "showInlinePadding": {
                "type": "JSON_LITERAL",
                "value": true
            },
            "size": {
                "type": "JSON_LITERAL",
                "value": "md"
            },
            "spaceBetweenItems": {
                "type": "JSON_LITERAL",
                "value": "none"
            },
            "tabStyles": {
                "type": "JSON_LITERAL",
                "value": ".tabset-tabs{\\n\\n}\\n.tabset-container{\\n\\n}"
            },
            "viewportConfiguration": {
                "type": "JSON_LITERAL",
                "value": {
                    "enableDataDrivenTabs": true,
                    "validation": {
                        "icon": {
                            "required": false
                        },
                        "name": {
                            "required": true
                        },
                        "order": {
                            "required": false
                        }
                    }
                }
            }
        },
        "slot": null,
        "styles": null
    },
    {
        "definition": {
            "id": "f552e6a932780394b6f06c14071aa115",
            "type": "MACROPONENT"
        },
        "elementId": "dashboard_1",
        "elementLabel": "Dashboard 1",
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
                            "sysId": "5e87a1af1b3106d06962fe60cd4bcba1"
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
                "element_id": "tabs_1",
                "styles": {}
            },
            {
                "element_id": "dashboard_1",
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
        name: 'Location Map Tab',
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
    }
]`,
        required_translations: `[ {
  "message" : "Location Map",
  "comment" : ""
}, {
  "message" : "Untitled Tab",
  "comment" : ""
} ]`,
        root_component_config: '{}',
        schema_version: '1.0.0',
        state_properties: `[
    
]`,
    },
})
