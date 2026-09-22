import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['6055f31247ebea5051a3e84d416d43ba'],
    name: 'Alert Change Access Request Widget 2.0',
    clientScript: Now.include('./sp_widget_alert_change_access_request_widget_2.0/client_script.js'),
    serverScript: Now.include('./sp_widget_alert_change_access_request_widget_2.0/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_alert_change_access_request_widget_2.0/template.html'),
    description: 'Count no of ALs change in Change Access Request 2.0',
    linkScript: Now.include('./sp_widget_alert_change_access_request_widget_2.0/link-script.js'),
    roles: ['x_aleen_snguardian.employee'],
    $meta: {
        useEsLatest: true,
    },
})
