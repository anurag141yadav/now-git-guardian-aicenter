import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['eb8cff954724aa10f487c24fe16d4347'],
    name: 'Alert Bulk Printing',
    clientScript: Now.include('./sp_widget_alert_bulk_printing/client_script.js'),
    serverScript: Now.include('./sp_widget_alert_bulk_printing/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_alert_bulk_printing/template.html'),
    customCss: Now.include('./sp_widget_alert_bulk_printing/style.scss'),
    hasPreview: true,
    id: 'alert_bulk_printing',
    linkScript: Now.include('./sp_widget_alert_bulk_printing/link-script.js'),
    roles: ['x_aleen_snguardian.employee'],
    $meta: {
        useEsLatest: true,
    },
})
