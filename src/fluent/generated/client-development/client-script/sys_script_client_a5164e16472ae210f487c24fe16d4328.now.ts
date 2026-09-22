import { ClientScript } from '@servicenow/sdk/core'

ClientScript({
    $id: Now.ID['a5164e16472ae210f487c24fe16d4328'],
    type: 'onSubmit',
    table: 'x_aleen_snguardian_visitor_visit',
    isolateScript: true,
    script: Now.include('./sys_script_client_a5164e16472ae210f487c24fe16d4328.client.js'),
    name: 'Set Start/End time Location based',
    global: false,
    view: 'reschedule',
    uiType: 'all',
})
