import { SPHeaderFooter } from '@servicenow/sdk/core'

SPHeaderFooter({
    $id: Now.ID['e53025d72b595250d4dffd74ce91bf04'],
    name: 'Alert Visitor Center Header',
    clientScript: Now.include('./sp_header_footer_alert_visitor_center_header/client_script.js'),
    serverScript: Now.include('./sp_header_footer_alert_visitor_center_header/server_script.js'),
    htmlTemplate: Now.include('./sp_header_footer_alert_visitor_center_header/template.html'),
    customCss: Now.include('./sp_header_footer_alert_visitor_center_header/style.scss'),
    hasPreview: true,
    id: 'alert-visitor-center-header',
    roles: [
        'x_aleen_snguardian.host',
        'x_aleen_snguardian.lobby_admin',
        'x_aleen_snguardian.visitor',
        'x_aleen_snguardian.kiosk',
        'x_aleen_snguardian.portal',
    ],
    static: true,
})
