import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['12297a29330e1a10bf1221382e5c7b26'],
    name: 'Alert Visitor Action  Home',
    clientScript: Now.include('./sp_widget_alert_visitor_action_home/client_script.js'),
    serverScript: Now.include('./sp_widget_alert_visitor_action_home/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_alert_visitor_action_home/template.html'),
    customCss: Now.include('./sp_widget_alert_visitor_action_home/style.scss'),
    demoData: {
        options: {
            walkin_record_producer: 'id=sc_cat_item&sys_id=3f46e3ec2bb51a10d4dffd74ce91bf43',
            id_scan_widget: 'alert-visitor-camera-capture',
            qr_scan_widget: 'alert-qr-code-reader',
            visit_actions:
                '[{"action":{"confirmMessage":"Print","propertyName":"type","propertyValue":"printOne","type":"widget","value":"alert-print-widget"},"condition":{"condition":"in","propertyName":"status.code","role":"x_aleen_snguardian.admin,admin,x_aleen_snguardian.lobby_admin","type":"data&role","value":"CHECK-IN,SCHEDULED"},"icon":"icon-print","style":"color: #FF9800;","title":"Print"},{"action":{"type":"catalog","value":"id=sc_cat_item&sys_id=20b21f0f2b255210d4dffd74ce91bf94"},"condition":{"condition":"in","propertyName":"status.code","role":"x_aleen_snguardian.admin,admin,x_aleen_snguardian.lobby_admin","type":"data&role","value":"SCHEDULED"},"icon":"fa fa-check-square-o","style":"color: #8BC34A;","title":"Check-in"},{"action":{"confirmMessage":"Checkout Confirmation","propertyName":"type","propertyValue":"checkoutbyKiosk","type":"widget","value":"alert-notification-widget"},"condition":{"condition":"in","propertyName":"status.code","value":"CHECK-IN,EXTENDED-STAY"},"icon":"fa fa-sign-out","style":"color: #009688;","title":"Checkout"}]',
        },
    },
    description: 'Alert Visitpr Action Home',
    hasPreview: true,
    id: 'alert-visitor_action_home',
    linkScript: Now.include('./sp_widget_alert_visitor_action_home/link-script.js'),
    roles: ['x_aleen_snguardian.kiosk', 'x_aleen_snguardian.lobby_admin'],
    optionSchema: [
        {
            hint: 'Widget ID for ID Scan',
            name: 'id_scan_widget',
            section: 'Presentation',
            defaultValue: 'alert-visitor-camera-capture',
            label: 'Widget ID for ID Scan',
            type: 'string',
        },
        {
            hint: 'Widget ID for QR Scan',
            name: 'qr_scan_widget',
            section: 'Presentation',
            defaultValue: 'alert-qr-code-reader',
            label: 'Widget ID for QR Scan',
            type: 'string',
        },
        {
            hint: 'Walk-in Record Producer ID',
            name: 'walkin_record_producer',
            section: 'Presentation',
            defaultValue: 'id=sc_cat_item&sys_id=3f46e3ec2bb51a10d4dffd74ce91bf43',
            label: 'Walk-in Record Producer ID',
            type: 'string',
        },
        {
            hint: 'Visit Actions',
            name: 'visit_actions',
            section: 'Presentation',
            defaultValue:
                '[{"action":{"confirmMessage":"Print","propertyName":"type","propertyValue":"printOne","type":"widget","value":"alert-print-widget"},"condition":{"condition":"in","propertyName":"status.code","role":"x_aleen_snguardian.admin,admin,x_aleen_snguardian.lobby_admin,x_aleen_snguardian.kiosk","type":"data&role","value":"CHECK-IN,SCHEDULED"},"icon":"icon-print","style":"btn-warning btn-md m-l-xs text-right pull-right d-flex align-items-center","title":"Print"},{"action":{"type":"catalog","value":"id=sc_cat_item&sys_id=20b21f0f2b255210d4dffd74ce91bf94"},"condition":{"condition":"in","propertyName":"status.code","role":"x_aleen_snguardian.admin,admin,x_aleen_snguardian.lobby_admin,x_aleen_snguardian.kiosk","type":"data&role","value":"SCHEDULED"},"icon":"fa fa-check-square-o","style":"btn-success btn-md m-l-xs text-right pull-right d-flex align-items-center","title":"Check-in"},{"action":{"confirmMessage":"Checkout Confirmation","propertyName":"type","propertyValue":"checkoutbyKiosk","type":"widget","value":"alert-notification-widget"},"condition":{"condition":"in","propertyName":"status.code","role":"x_aleen_snguardian.kiosk","type":"data&role","value":"CHECK-IN,EXTENDED-STAY"},"icon":"fa fa-sign-out","style":"btn-danger btn-md m-l-xs text-right pull-right d-flex align-items-center","title":"Checkout"},{"action":{"confirmMessage":"Checkout Confirmation","propertyName":"type","propertyValue":"checkoutbyLobbyAdmin","type":"widget","value":"alert-notification-widget"},"condition":{"condition":"in","propertyName":"status.code","role":"x_aleen_snguardian.admin,admin,x_aleen_snguardian.lobby_admin","type":"data&role","value":"CHECK-IN,EXTENDED-STAY"},"icon":"fa fa-sign-out","style":"btn-danger btn-md m-l-xs text-right pull-right d-flex align-items-center","title":"Checkout"}]',
            label: 'Visit Actions',
            type: 'string',
        },
    ],
    $meta: {
        useEsLatest: true,
    },
})
