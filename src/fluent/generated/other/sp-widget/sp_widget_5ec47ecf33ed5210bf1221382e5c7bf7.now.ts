import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['5ec47ecf33ed5210bf1221382e5c7bf7'],
    name: 'Alert Signature Pad',
    clientScript: Now.include('./sp_widget_alert_signature_pad/client_script.js'),
    serverScript: Now.include('./sp_widget_alert_signature_pad/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_alert_signature_pad/template.html'),
    customCss: Now.include('./sp_widget_alert_signature_pad/style.scss'),
    description: 'Alert Signature Pad',
    hasPreview: true,
    id: 'alert-signature-pad',
    linkScript: Now.include('./sp_widget_alert_signature_pad/link-script.js'),
    roles: ['x_aleen_snguardian.visitor', 'x_aleen_snguardian.portal'],
    dependencies: ['4d45b64333219210bf1221382e5c7b23'],
})
