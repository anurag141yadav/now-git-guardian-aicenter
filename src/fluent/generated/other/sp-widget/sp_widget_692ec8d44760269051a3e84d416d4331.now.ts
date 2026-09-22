import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['692ec8d44760269051a3e84d416d4331'],
    name: 'Alert NFC Web Prov',
    clientScript: Now.include('./sp_widget_alert_nfc_web_prov/client_script.js'),
    serverScript: Now.include('./sp_widget_alert_nfc_web_prov/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_alert_nfc_web_prov/template.html'),
    customCss: Now.include('./sp_widget_alert_nfc_web_prov/style.scss'),
    hasPreview: true,
    id: 'alert_nfc_web_prov',
    linkScript: Now.include('./sp_widget_alert_nfc_web_prov/link-script.js'),
    roles: ['x_aleen_snguardian.visitor'],
    optionSchema: [
        {
            name: 'mc_system_code',
            section: 'other',
            defaultValue: 'ALERT-MC-01',
            label: 'MC System Code',
            type: 'string',
        },
    ],
    dependencies: [
        'ebfb11244749c350f487c24fe16d437c',
        '6a4c11244749c350f487c24fe16d43cb',
        '1d2c15244749c350f487c24fe16d43ed',
    ],
    $meta: {
        useEsLatest: true,
    },
})
