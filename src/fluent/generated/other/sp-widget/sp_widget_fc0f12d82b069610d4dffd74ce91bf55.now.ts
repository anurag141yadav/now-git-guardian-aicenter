import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['fc0f12d82b069610d4dffd74ce91bf55'],
    name: 'Alert Visitor Kiosk Topics',
    clientScript: Now.include('./sp_widget_alert_visitor_kiosk_topics/client_script.js'),
    serverScript: Now.include('./sp_widget_alert_visitor_kiosk_topics/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_alert_visitor_kiosk_topics/template.html'),
    customCss: Now.include('./sp_widget_alert_visitor_kiosk_topics/style.scss'),
    demoData: {
        options: {
            widget_title: 'Visitor Managment',
            decision_table: '',
            theme: 'default',
            show_locations_widget: 'YES',
            location_table: '',
            location_query_limit: 5,
        },
    },
    hasPreview: true,
    id: 'alert-visitor-kiosk-topics',
    linkScript: Now.include('./sp_widget_alert_visitor_kiosk_topics/link-script.js'),
    roles: ['x_aleen_snguardian.kiosk'],
    optionSchema: [
        {
            hint: 'Title name of the widget',
            name: 'widget_title',
            section: 'Presentation',
            defaultValue: 'Visitor Management',
            label: 'Title',
            type: 'string',
        },
        {
            hint: 'Theme',
            name: 'theme',
            section: 'Presentation',
            defaultValue: 'default',
            label: 'Theme',
            type: 'choice',
            choices: [
                {
                    label: 'default',
                    value: 'default',
                },
                {
                    label: 'primary',
                    value: 'primary',
                },
                {
                    label: 'secondary',
                    value: 'secondary',
                },
                {
                    label: 'info',
                    value: 'info',
                },
                {
                    label: 'success',
                    value: 'success',
                },
                {
                    label: 'warning',
                    value: 'warning',
                },
                {
                    label: 'danger',
                    value: 'danger',
                },
            ],
        },
        {
            hint: 'Decision Table Id',
            name: 'decision_table',
            section: 'Presentation',
            defaultValue: '',
            label: 'Decision Table',
            type: 'string',
        },
        {
            hint: 'Show Locations',
            name: 'show_locations_widget',
            section: 'Presentation',
            defaultValue: 'YES',
            label: 'Show Locations',
            type: 'choice',
            choices: [
                {
                    label: 'YES',
                    value: 'YES',
                },
                {
                    label: 'NO',
                    value: 'NO',
                },
            ],
        },
        {
            hint: 'Location Table',
            name: 'location_table',
            section: 'Presentation',
            defaultValue: '',
            label: 'Location Table',
            type: 'string',
        },
        {
            hint: 'Location Results',
            name: 'location_query_limit',
            section: 'Presentation',
            defaultValue: '5',
            label: 'Location Result Count',
            type: 'integer',
        },
    ],
})
