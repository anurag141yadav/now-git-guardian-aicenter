import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['64b1e5e71b3106d06962fe60cd4bcbcc'],
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
                "value": ""
            },
            "src": {
                "script": {
                    "apiVersion": "2.0.0",
                    "controllerElementId": null,
                    "inlineScript": "/**\\n  * @param {params} params\\n  * @param {api} params.api\\n  * @param {TransformApiHelpers} params.helpers\\n  */\\nfunction evaluateProperty({api, helpers}) {\\n\\t  return '';\\n\\n}",
                    "scriptSysId": "5c6d48bc1b309e10bf7ea82b234bcb16",
                    "target": null
                },
                "type": "CLIENT_TRANSFORM_SCRIPT"
            },
            "title": {
                "type": "JSON_LITERAL",
                "value": "Locations"
            },
            "width": {
                "type": "JSON_LITERAL",
                "value": ""
            }
        },
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
            "flex-direction": "column"
        },
        "templateId": "5832fd4d53c31010e6bcddeeff7b12db",
        "type": "flex"
    },
    "version": "3.0.0"
}`,
        macroponent_dependencies: '',
        name: 'Default',
        required_translations: '[ ]',
        schema_version: '1.0.0',
    },
})
