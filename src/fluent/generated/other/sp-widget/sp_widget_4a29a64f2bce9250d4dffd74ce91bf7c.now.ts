import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['4a29a64f2bce9250d4dffd74ce91bf7c'],
    name: 'Alert ID Verification Widget',
    clientScript: Now.include('./sp_widget_alert_id_verification_widget/client_script.js'),
    serverScript: Now.include('./sp_widget_alert_id_verification_widget/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_alert_id_verification_widget/template.html'),
    customCss: Now.include('./sp_widget_alert_id_verification_widget/style.scss'),
    description: 'ID Capture and ID Verification for Visitor',
    hasPreview: true,
    id: 'alert-id-verification-widget',
    linkScript: Now.include('./sp_widget_alert_id_verification_widget/link-script.js'),
    roles: ['x_aleen_snguardian.visitor'],
    optionSchema: [
        {
            name: 'scan_type',
            section: 'Presentation',
            defaultValue: 'id_capture',
            label: 'ScanType',
            type: 'string',
        },
    ],
    $meta: {
        useEsLatest: true,
    },
})
