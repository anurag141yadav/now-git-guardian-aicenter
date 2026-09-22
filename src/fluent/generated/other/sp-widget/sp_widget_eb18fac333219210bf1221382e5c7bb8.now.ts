import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['eb18fac333219210bf1221382e5c7bb8'],
    name: 'Alert QR Code Generator',
    clientScript: Now.include('./sp_widget_alert_qr_code_generator/client_script.js'),
    serverScript: Now.include('./sp_widget_alert_qr_code_generator/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_alert_qr_code_generator/template.html'),
    customCss: Now.include('./sp_widget_alert_qr_code_generator/style.scss'),
    description: 'Alert QR Code Generator',
    hasPreview: true,
    id: 'alert-qr-code-generator',
    linkScript: Now.include('./sp_widget_alert_qr_code_generator/link-script.js'),
    roles: ['x_aleen_snguardian.visitor', 'x_aleen_snguardian.portal'],
    dependencies: ['6598fa0733219210bf1221382e5c7bb7'],
    $meta: {
        useEsLatest: true,
    },
})
