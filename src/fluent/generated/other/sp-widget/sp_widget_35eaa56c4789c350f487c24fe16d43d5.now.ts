import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['35eaa56c4789c350f487c24fe16d43d5'],
    name: 'Alert MC Redirect Widget',
    clientScript: Now.include('./sp_widget_alert_mc_redirect_widget/client_script.js'),
    serverScript: Now.include('./sp_widget_alert_mc_redirect_widget/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_alert_mc_redirect_widget/template.html'),
    id: 'alert_mc_redirect_widget',
    linkScript: Now.include('./sp_widget_alert_mc_redirect_widget/link-script.js'),
    roles: ['x_aleen_snguardian.visitor'],
    optionSchema: [
        {
            name: 'alert_mc_redirect',
            section: 'other',
            defaultValue: '/esc?id=alert_mobile_credential_provision',
            label: 'Alert MC Redirect',
            type: 'string',
        },
    ],
    $meta: {
        useEsLatest: true,
    },
})
