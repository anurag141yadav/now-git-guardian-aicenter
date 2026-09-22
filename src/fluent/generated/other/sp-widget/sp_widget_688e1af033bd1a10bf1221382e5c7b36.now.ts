import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['688e1af033bd1a10bf1221382e5c7b36'],
    name: 'Alert Print Widget',
    clientScript: Now.include('./sp_widget_alert_print_widget/client_script.js'),
    serverScript: Now.include('./sp_widget_alert_print_widget/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_alert_print_widget/template.html'),
    customCss: Now.include('./sp_widget_alert_print_widget/style.scss'),
    description: 'Alert Print Widget',
    hasPreview: true,
    id: 'alert-print-widget',
    linkScript: Now.include('./sp_widget_alert_print_widget/link-script.js'),
    roles: ['x_aleen_snguardian.lobby_admin', 'x_aleen_snguardian.kiosk', 'x_aleen_snguardian.visitor'],
    dependencies: ['6598fa0733219210bf1221382e5c7bb7'],
    $meta: {
        useEsLatest: true,
    },
})
