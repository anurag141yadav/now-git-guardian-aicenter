import { ClientScript } from '@servicenow/sdk/core'

ClientScript({
    $id: Now.ID['8a260e8d2b95d610d4dffd74ce91bff1'],
    type: 'onChange',
    table: 'x_aleen_snguardian_system_scheduled_job',
    isolateScript: true,
    script: Now.include('./sys_script_client_8a260e8d2b95d610d4dffd74ce91bff1.client.js'),
    name: 'Prepare Script on Change Function',
    uiType: 'all',
    field: 'function',
})
