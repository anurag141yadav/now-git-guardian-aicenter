import { ClientScript } from '@servicenow/sdk/core'

ClientScript({
    $id: Now.ID['1822598c476e6a50f487c24fe16d4380'],
    type: 'onChange',
    table: 'x_aleen_snguardian_visitor_visit',
    isolateScript: true,
    script: Now.include('./sys_script_client_1822598c476e6a50f487c24fe16d4380.client.js'),
    name: 'Set Start/End time All day event',
    global: false,
    view: 'reschedule',
    uiType: 'all',
    field: 'is_all_day_event',
})
