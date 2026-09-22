import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['af2fc5ad33ea5e10bf1221382e5c7b1a'],
    name: 'Alert Group Visit MRVS Data Change',
    clientScript: Now.include('./sp_widget_alert_group_visit_mrvs_data_change/client_script.js'),
    serverScript: Now.include('./sp_widget_alert_group_visit_mrvs_data_change/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_alert_group_visit_mrvs_data_change/template.html'),
    id: 'alert_group_visit_mrvs_data_change',
    linkScript: Now.include('./sp_widget_alert_group_visit_mrvs_data_change/link-script.js'),
    roles: ['x_aleen_snguardian.visitor'],
    $meta: {
        useEsLatest: true,
    },
})
