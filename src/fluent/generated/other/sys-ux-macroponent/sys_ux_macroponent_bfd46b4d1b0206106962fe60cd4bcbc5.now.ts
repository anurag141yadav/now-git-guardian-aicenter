import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['bfd46b4d1b0206106962fe60cd4bcbc5'],
    table: 'sys_ux_macroponent',
    data: {
        associated_types: '',
        category: 'page',
        component_dependencies: '',
        composition: `[
    {
        "definition": {
            "id": "0c2405fa776eb44740b7dc35566d4bd0",
            "type": "MACROPONENT"
        },
        "elementLabel": "Dashboard overview 1",
        "elementId": "dashboard_overview_1",
        "eventMappings": [
            
        ],
        "propertyValues": {
            "heading": {
                "type": "TRANSLATION_LITERAL",
                "value": {
                    "code": null,
                    "message": "Dashboards",
                    "comment": ""
                }
            },
            "limit": {
                "type": "JSON_LITERAL",
                "value": "6"
            },
            "displayAllDashboards": {
                "type": "JSON_LITERAL",
                "value": false
            },
            "userInfo": {
                "type": "CONTEXT_BINDING",
                "binding": {
                    "category": "session",
                    "address": [
                        "user"
                    ]
                }
            },
            "filter": {
                "type": "JSON_LITERAL",
                "value": "none"
            },
            "showAllTab": {
                "type": "JSON_LITERAL",
                "value": true
            },
            "showCertified": {
                "type": "JSON_LITERAL",
                "value": false
            },
            "showBookmarked": {
                "type": "JSON_LITERAL",
                "value": false
            },
            "hideCreateButton": {
                "type": "JSON_LITERAL",
                "value": false
            },
            "showPersonalizedLanguage": {
                "type": "JSON_LITERAL",
                "value": false
            },
            "defaultExperienceId": {
                "type": "CONTEXT_BINDING",
                "binding": {
                    "category": "app",
                    "address": [
                        "appId"
                    ]
                }
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
        disable_auto_reflow: false,
        dispatched_events: '',
        extends: '19be392623033300f4b4c50947bf65ba',
        handled_events: '',
        interfaces: '',
        internal_event_mappings: '{}',
        layout: `{
    "default": {
        "type": "flex",
        "root": null,
        "children": null,
        "rules": null,
        "styles": {
            "flex-direction": "column"
        },
        "items": [
            {
                "element_id": "dashboard_overview_1",
                "styles": {}
            }
        ],
        "templateId": "5832fd4d53c31010e6bcddeeff7b12db"
    },
    "version": "3.0.0"
}`,
        macroponent_dependencies: '',
        name: 'Default',
        required_translations: `[ {
  "message" : "Dashboards",
  "comment" : ""
} ]`,
        schema_version: '1.0.0',
    },
})
