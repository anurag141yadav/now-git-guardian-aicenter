import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['d7fe4e441b5a4610759455342a4bcb1d'],
    name: 'Alert change access request widget',
    clientScript: Now.include('./sp_widget_change_access_request_widget/client_script.js'),
    serverScript: Now.include('./sp_widget_change_access_request_widget/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_change_access_request_widget/template.html'),
    id: 'change_access_request_widget',
    linkScript: Now.include('./sp_widget_change_access_request_widget/link-script.js'),
    roles: ['x_aleen_snguardian.employee'],
    $meta: {
        useEsLatest: true,
    },
})
