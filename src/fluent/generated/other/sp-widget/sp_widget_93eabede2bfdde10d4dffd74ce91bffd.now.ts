import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['93eabede2bfdde10d4dffd74ce91bffd'],
    name: 'Alert Recurrence Option Selector',
    clientScript: Now.include('./sp_widget_recurrence_option_selector/client_script.js'),
    serverScript: Now.include('./sp_widget_recurrence_option_selector/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_recurrence_option_selector/template.html'),
    customCss: Now.include('./sp_widget_recurrence_option_selector/style.scss'),
    id: 'recurrence_option_selector',
    linkScript: Now.include('./sp_widget_recurrence_option_selector/link-script.js'),
    roles: ['x_aleen_snguardian.visitor'],
    $meta: {
        useEsLatest: true,
    },
})
