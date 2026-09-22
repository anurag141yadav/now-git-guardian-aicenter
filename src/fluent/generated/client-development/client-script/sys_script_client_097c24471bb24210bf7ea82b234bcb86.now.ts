import { ClientScript } from '@servicenow/sdk/core'

ClientScript({
    $id: Now.ID['097c24471bb24210bf7ea82b234bcb86'],
    type: 'onLoad',
    table: 'x_aleen_snguardian_identity',
    isolateScript: true,
    script: Now.include('./sys_script_client_097c24471bb24210bf7ea82b234bcb86.client.js'),
    name: 'Set Skip Propogation Empty',
    uiType: 'all',
})
