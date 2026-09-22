import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['5d89fa4733219210bf1221382e5c7b2f'],
    name: 'Alert Check in Success',
    clientScript: Now.include('./sp_widget_alert_checkin_success/client_script.js'),
    serverScript: Now.include('./sp_widget_alert_checkin_success/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_alert_checkin_success/template.html'),
    customCss: Now.include('./sp_widget_alert_checkin_success/style.scss'),
    description: 'Alert Check in Success',
    hasPreview: true,
    id: 'alert-checkin-success',
    linkScript: Now.include('./sp_widget_alert_checkin_success/link-script.js'),
    roles: ['x_aleen_snguardian.visitor'],
    $meta: {
        useEsLatest: true,
    },
})
