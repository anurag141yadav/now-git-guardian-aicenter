import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['900b8b02470d665051a3e84d416d4366'],
    name: 'Alert User Image Widget',
    clientScript: Now.include('./sp_widget_alert_user_image_widget/client_script.js'),
    serverScript: Now.include('./sp_widget_alert_user_image_widget/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_alert_user_image_widget/template.html'),
    customCss: Now.include('./sp_widget_alert_user_image_widget/style.scss'),
    id: 'alert_user_image_widget',
    linkScript: Now.include('./sp_widget_alert_user_image_widget/link-script.js'),
    roles: ['x_aleen_snguardian.visitor'],
    $meta: {
        useEsLatest: true,
    },
})
