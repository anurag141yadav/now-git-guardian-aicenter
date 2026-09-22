import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['f950d274337d1a10bf1221382e5c7be4'],
    name: 'Alert Feedback Widget',
    clientScript: Now.include('./sp_widget_alert_feedback_widget/client_script.js'),
    serverScript: Now.include('./sp_widget_alert_feedback_widget/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_alert_feedback_widget/template.html'),
    customCss: Now.include('./sp_widget_alert_feedback_widget/style.scss'),
    description: 'Alert Feedback & Chat  Widget',
    hasPreview: true,
    id: 'alert-feedback-widget',
    linkScript: Now.include('./sp_widget_alert_feedback_widget/link-script.js'),
    roles: ['x_aleen_snguardian.visitor'],
    $meta: {
        useEsLatest: true,
    },
})
