import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['a6d67a8333219210bf1221382e5c7bc3'],
    name: 'Alert QR Code Reader',
    clientScript: Now.include('./sp_widget_alert_qr_code_reader/client_script.js'),
    serverScript: Now.include('./sp_widget_alert_qr_code_reader/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_alert_qr_code_reader/template.html'),
    customCss: Now.include('./sp_widget_alert_qr_code_reader/style.scss'),
    demoData: {
        options: {
            data_type: 'json',
            data_attribute: 'data',
        },
    },
    description: 'Alert QR code Reader',
    hasPreview: true,
    id: 'alert-qr-code-reader',
    linkScript: Now.include('./sp_widget_alert_qr_code_reader/link-script.js'),
    roles: ['x_aleen_snguardian.visitor', 'x_aleen_snguardian.portal'],
    dependencies: ['8757b2c333219210bf1221382e5c7b0d'],
    $meta: {
        useEsLatest: true,
    },
})
