import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['82b6c7a82b351a10d4dffd74ce91bfa2'],
    name: 'Alert Notification Widget',
    clientScript: Now.include('./sp_widget_alert_notification_widget/client_script.js'),
    serverScript: Now.include('./sp_widget_alert_notification_widget/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_alert_notification_widget/template.html'),
    customCss: Now.include('./sp_widget_alert_notification_widget/style.scss'),
    description: 'Notification widget used for Emergency, Reminder, Instant Messaging',
    hasPreview: true,
    id: 'alert-notification-widget',
    linkScript: Now.include('./sp_widget_alert_notification_widget/link-script.js'),
    roles: ['x_aleen_snguardian.visitor'],
    $meta: {
        useEsLatest: true,
    },
})
