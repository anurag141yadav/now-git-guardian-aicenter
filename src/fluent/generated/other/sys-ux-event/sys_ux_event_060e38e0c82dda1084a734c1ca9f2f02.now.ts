import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['060e38e0c82dda1084a734c1ca9f2f02'],
    table: 'sys_ux_event',
    data: {
        event_name: 'NAV_ITEM_SELECTED_RELAY_420ef4e09d2dda1025caa2b3971470ee',
        label: 'Link to destination Relay (New Home default)',
        props: `[
    {
        "name": "route",
        "fieldType": "string",
        "interfaceApiName": "global.route",
        "label": "Route type"
    },
    {
        "name": "fields",
        "fieldType": "json",
        "interfaceApiName": "global.route",
        "label": "Route fields"
    },
    {
        "name": "params",
        "fieldType": "json",
        "interfaceApiName": "global.route",
        "label": "Optionals parameters"
    },
    {
        "name": "redirect",
        "fieldType": "boolean",
        "interfaceApiName": null,
        "label": "Remove previous URL from browser history"
    },
    {
        "name": "passiveNavigation",
        "fieldType": "boolean",
        "interfaceApiName": null,
        "label": "Load in background (advanced)"
    },
    {
        "name": "title",
        "fieldType": "string",
        "interfaceApiName": null,
        "label": "Title (advanced)"
    },
    {
        "name": "multiInstField",
        "fieldType": "string",
        "interfaceApiName": null,
        "label": "Multi-instance field (advanced)"
    },
    {
        "name": "targetRoute",
        "fieldType": "string",
        "interfaceApiName": null,
        "label": "Sub-navigation route (advanced)"
    },
    {
        "name": "external",
        "fieldType": "json",
        "interfaceApiName": "global.route",
        "label": "External URL object"
    }
]`,
        required_translations: `[ {
  "message" : "External URL object",
  "comment" : ""
}, {
  "message" : "Load in background (advanced)",
  "comment" : ""
}, {
  "message" : "Multi-instance field (advanced)",
  "comment" : ""
}, {
  "message" : "Optionals parameters",
  "comment" : ""
}, {
  "message" : "Remove previous URL from browser history",
  "comment" : ""
}, {
  "message" : "Route fields",
  "comment" : ""
}, {
  "message" : "Route type",
  "comment" : ""
}, {
  "message" : "Sub-navigation route (advanced)",
  "comment" : ""
}, {
  "message" : "Title (advanced)",
  "comment" : ""
} ]`,
        schema_version: '1.0.0',
    },
})
