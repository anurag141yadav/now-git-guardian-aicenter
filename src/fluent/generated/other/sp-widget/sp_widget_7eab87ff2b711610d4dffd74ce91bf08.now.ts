import { SPWidget } from '@servicenow/sdk/core'

SPWidget({
    $id: Now.ID['7eab87ff2b711610d4dffd74ce91bf08'],
    name: 'AlertEmpty',
    clientScript: Now.include('./sp_widget_alertempty/client_script.js'),
    serverScript: Now.include('./sp_widget_alertempty/server_script.js'),
    htmlTemplate: Now.include('./sp_widget_alertempty/template.html'),
    hasPreview: true,
    id: 'alertempty',
    linkScript: Now.include('./sp_widget_alertempty/link-script.js'),
    roles: ['x_aleen_snguardian.visitor'],
})
