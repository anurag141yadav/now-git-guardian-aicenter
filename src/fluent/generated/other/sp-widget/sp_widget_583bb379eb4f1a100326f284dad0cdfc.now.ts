import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['583bb379eb4f1a100326f284dad0cdfc'],
    name: 'Alert Bulk Mobile Cred Identites Changed',
    clientScript: Now.include('./sp_widget_bulk_mobile_cred_mrvs/client_script.js'),
    serverScript: Now.include('./sp_widget_bulk_mobile_cred_mrvs/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_bulk_mobile_cred_mrvs/template.html'),
    id: 'bulk-mobile-cred-mrvs',
    linkScript: Now.include('./sp_widget_bulk_mobile_cred_mrvs/link-script.js'),
    roles: ['x_aleen_snguardian.employee'],
    $meta: {
        useEsLatest: true,
    },
})
