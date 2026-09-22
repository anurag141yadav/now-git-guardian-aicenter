import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['579a99d833ad9a10bf1221382e5c7b3a'],
    name: 'Alert Date Picker',
    clientScript: Now.include('./sp_widget_alert_date_picker/client_script.js'),
    serverScript: Now.include('./sp_widget_alert_date_picker/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_alert_date_picker/template.html'),
    customCss: Now.include('./sp_widget_alert_date_picker/style.scss'),
    hasPreview: true,
    id: 'alert-date-picker',
    linkScript: Now.include('./sp_widget_alert_date_picker/link-script.js'),
    roles: ['x_aleen_snguardian.lobby_admin'],
    $meta: {
        useEsLatest: true,
    },
})
