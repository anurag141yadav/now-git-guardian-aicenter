import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['bce36e424749665051a3e84d416d43da'],
    name: 'Alert Mobile Credentials',
    clientScript: Now.include('./sp_widget_alert_mobile_credentials/client_script.js'),
    serverScript: Now.include('./sp_widget_alert_mobile_credentials/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_alert_mobile_credentials/template.html'),
    customCss: Now.include('./sp_widget_alert_mobile_credentials/style.scss'),
    id: 'alert_mobile_credentials',
    linkScript: Now.include('./sp_widget_alert_mobile_credentials/link-script.js'),
    roles: ['x_aleen_snguardian.visitor'],
    optionSchema: [
        {
            hint: 'MC  System Code',
            name: 'mc_system_code',
            section: 'other',
            defaultValue: 'ALERT-MC-01',
            label: 'MC System Code',
            type: 'string',
        },
    ],
    $meta: {
        useEsLatest: true,
    },
})
