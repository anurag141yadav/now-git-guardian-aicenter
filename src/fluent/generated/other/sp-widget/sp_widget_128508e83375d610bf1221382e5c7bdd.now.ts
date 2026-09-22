import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['128508e83375d610bf1221382e5c7bdd'],
    name: 'Alert Score Card',
    clientScript: Now.include('./sp_widget_alert_score_card/client_script.js'),
    serverScript: Now.include('./sp_widget_alert_score_card/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_alert_score_card/template.html'),
    customCss: Now.include('./sp_widget_alert_score_card/style.scss'),
    description: 'Alert Score Card',
    hasPreview: true,
    id: 'alert-score-card',
    linkScript: Now.include('./sp_widget_alert_score_card/link-script.js'),
    roles: ['x_aleen_snguardian.lobby_admin'],
    optionSchema: [],
    $meta: {
        useEsLatest: true,
    },
})
