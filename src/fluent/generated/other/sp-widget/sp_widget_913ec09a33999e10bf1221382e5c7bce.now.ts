import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['913ec09a33999e10bf1221382e5c7bce'],
    name: 'Alert Visitor Portal Topics',
    clientScript: Now.include('./sp_widget_alert_visitor_portal_home_topics/client_script.js'),
    serverScript: Now.include('./sp_widget_alert_visitor_portal_home_topics/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_alert_visitor_portal_home_topics/template.html'),
    customCss: Now.include('./sp_widget_alert_visitor_portal_home_topics/style.scss'),
    demoData: {
        options: {
            widget_title: 'Welcome',
            show_right_to_be_forgotten: 'YES',
            show_logout: 'YES',
        },
    },
    hasPreview: true,
    id: 'alert-visitor-portal-home-topics',
    linkScript: Now.include('./sp_widget_alert_visitor_portal_home_topics/link-script.js'),
    roles: ['x_aleen_snguardian.portal'],
    optionSchema: [
        {
            hint: 'Title',
            name: 'widget_title',
            section: 'Presentation',
            defaultValue: 'Welcome',
            label: 'Title',
            type: 'string',
        },
        {
            hint: 'Show Right to Be Forgotten',
            name: 'show_right_to_be_forgotten',
            section: 'Presentation',
            defaultValue: 'YES',
            label: 'Show Right to Be Forgotten',
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
            hint: 'Show Logout',
            name: 'show_logout',
            section: 'Presentation',
            defaultValue: 'YES',
            label: 'Show Logout',
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
    ],
    $meta: {
        useEsLatest: true,
    },
})
