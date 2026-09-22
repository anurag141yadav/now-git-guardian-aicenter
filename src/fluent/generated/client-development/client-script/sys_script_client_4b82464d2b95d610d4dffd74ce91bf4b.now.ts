import { ClientScript } from '@servicenow/sdk/core'

ClientScript({
    $id: Now.ID['4b82464d2b95d610d4dffd74ce91bf4b'],
    type: 'onLoad',
    table: 'x_aleen_snguardian_system_scheduled_job',
    appliesExtended: true,
    isolateScript: true,
    script: Now.include('./sys_script_client_4b82464d2b95d610d4dffd74ce91bf4b.client.js'),
    name: 'Set Application Scope Default',
    description:
        'Set "Guardian"  Application Scope Default, so that it won\'t create jobs iin other scope like Global scope',
    uiType: 'all',
})
