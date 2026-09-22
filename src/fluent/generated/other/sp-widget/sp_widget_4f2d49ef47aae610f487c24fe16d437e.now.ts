import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['4f2d49ef47aae610f487c24fe16d437e'],
    name: 'Alert Merge Visits Widget',
    clientScript: Now.include('./sp_widget_alert_merge_visits_widget/client_script.js'),
    serverScript: Now.include('./sp_widget_alert_merge_visits_widget/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_alert_merge_visits_widget/template.html'),
    id: 'alert-merge-visits-widget',
    linkScript: Now.include('./sp_widget_alert_merge_visits_widget/link-script.js'),
    roles: ['x_aleen_snguardian.visitor'],
    $meta: {
        useEsLatest: true,
    },
})
