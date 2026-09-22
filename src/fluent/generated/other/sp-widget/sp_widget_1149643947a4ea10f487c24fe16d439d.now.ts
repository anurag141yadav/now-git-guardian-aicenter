import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['1149643947a4ea10f487c24fe16d439d'],
    name: 'Alert print badge',
    clientScript: Now.include('./sp_widget_alert_print_badge/client_script.js'),
    serverScript: Now.include('./sp_widget_alert_print_badge/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_alert_print_badge/template.html'),
    customCss: Now.include('./sp_widget_alert_print_badge/style.scss'),
    hasPreview: true,
    id: 'alert_print_badge',
    linkScript: Now.include('./sp_widget_alert_print_badge/link-script.js'),
    roles: ['x_aleen_snguardian.employee'],
    $meta: {
        useEsLatest: true,
    },
})
