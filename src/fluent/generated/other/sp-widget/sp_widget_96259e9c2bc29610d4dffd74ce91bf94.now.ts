import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['96259e9c2bc29610d4dffd74ce91bf94'],
    name: 'Alert Visitor OTP',
    clientScript: Now.include('./sp_widget_alert_visitor_otp/client_script.js'),
    serverScript: Now.include('./sp_widget_alert_visitor_otp/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_alert_visitor_otp/template.html'),
    customCss: Now.include('./sp_widget_alert_visitor_otp/style.scss'),
    hasPreview: true,
    id: 'alert_visitor_otp',
    linkScript: Now.include('./sp_widget_alert_visitor_otp/link-script.js'),
    roles: ['x_aleen_snguardian.portal'],
    optionSchema: [
        {
            name: 'username',
            section: 'Presentation',
            defaultValue: '',
            label: 'Visitor Admin User',
            type: 'string',
        },
        {
            name: 'password',
            section: 'Presentation',
            defaultValue: '',
            label: 'Password',
            type: 'string',
        },
    ],
    $meta: {
        useEsLatest: true,
    },
})
