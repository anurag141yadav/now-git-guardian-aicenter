import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['3c96575547f16a5051a3e84d416d431b'],
    name: 'Alert Visitor Photo Capture',
    clientScript: Now.include('./sp_widget_alert_visitor_photo_capture/client_script.js'),
    serverScript: Now.include('./sp_widget_alert_visitor_photo_capture/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_alert_visitor_photo_capture/template.html'),
    customCss: Now.include('./sp_widget_alert_visitor_photo_capture/style.scss'),
    id: 'alert_visitor_photo_capture',
    linkScript: Now.include('./sp_widget_alert_visitor_photo_capture/link-script.js'),
    roles: ['x_aleen_snguardian.visitor'],
    $meta: {
        useEsLatest: true,
    },
})
