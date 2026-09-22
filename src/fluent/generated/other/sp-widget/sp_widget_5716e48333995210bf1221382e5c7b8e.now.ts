import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['5716e48333995210bf1221382e5c7b8e'],
    name: 'Alert Visitor Locations',
    clientScript: Now.include('./sp_widget_alert_visitor_locations/client_script.js'),
    serverScript: Now.include('./sp_widget_alert_visitor_locations/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_alert_visitor_locations/template.html'),
    customCss: Now.include('./sp_widget_alert_visitor_locations/style.scss'),
    demoData: {
        options: {
            table_name: 'x_aleen_snguardian_location',
            query_limit: '5',
            filter_query: 'parentISNOTEMPTY^is_deleted=false^type=LOBBY',
        },
    },
    description: 'Alert Visitor Locations',
    hasPreview: true,
    id: 'alert-visitor-locations',
    linkScript: Now.include('./sp_widget_alert_visitor_locations/link-script.js'),
    roles: ['x_aleen_snguardian.lobby_admin'],
    optionSchema: [
        {
            hint: 'Table Name',
            name: 'table_name',
            section: 'Presentation',
            defaultValue: 'cmn_location',
            label: 'Table Name',
            type: 'string',
        },
        {
            hint: 'Query Limit',
            name: 'query_limit',
            section: 'Presentation',
            defaultValue: '5',
            label: 'Query Limit',
            type: 'string',
        },
        {
            hint: 'Filter Query',
            name: 'filter_query',
            section: 'Presentation',
            label: 'Filter Query',
            type: 'string',
            defaultValue: '',
        },
    ],
    $meta: {
        useEsLatest: true,
    },
})
