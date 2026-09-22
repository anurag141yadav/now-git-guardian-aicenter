import { ClientScript } from '@servicenow/sdk/core'

ClientScript({
    $id: Now.ID['5204f26447ed3650f487c24fe16d438d'],
    type: 'onChange',
    table: 'x_aleen_snguardian_identity_system',
    isolateScript: true,
    script: Now.include('./sys_script_client_5204f26447ed3650f487c24fe16d438d.client.js'),
    name: 'onChange check MC System',
    uiType: 'all',
    field: 'system',
})
