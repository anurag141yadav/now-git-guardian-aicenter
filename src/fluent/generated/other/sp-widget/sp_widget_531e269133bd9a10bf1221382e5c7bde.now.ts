import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['531e269133bd9a10bf1221382e5c7bde'],
    name: 'Alert Visitor Home',
    clientScript: Now.include('./sp_widget_alert_visitor_home/client_script.js'),
    serverScript: Now.include('./sp_widget_alert_visitor_home/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_alert_visitor_home/template.html'),
    description: 'Alert Visitor Home',
    id: 'alert-visitor-home',
    linkScript: Now.include('./sp_widget_alert_visitor_home/link-script.js'),
    roles: ['x_aleen_snguardian.portal', 'x_aleen_snguardian.visitor'],
})
