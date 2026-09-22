import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['73f03d2e33461e10bf1221382e5c7bf9'],
    name: 'Alert NDA Widget',
    clientScript: Now.include('./sp_widget_alert_nda_widget/client_script.js'),
    serverScript: Now.include('./sp_widget_alert_nda_widget/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_alert_nda_widget/template.html'),
    customCss: Now.include('./sp_widget_alert_nda_widget/style.scss'),
    description: 'Alert NDA Widget',
    id: 'alert-nda-widget',
    linkScript: Now.include('./sp_widget_alert_nda_widget/link-script.js'),
    roles: ['x_aleen_snguardian.portal', 'x_aleen_snguardian.lobby_admin'],
    dependencies: ['3bba13e047ea6a1051a3e84d416d4315'],
    $meta: {
        useEsLatest: true,
    },
})
