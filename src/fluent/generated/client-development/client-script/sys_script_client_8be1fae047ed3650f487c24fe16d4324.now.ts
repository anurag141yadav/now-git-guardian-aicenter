import { ClientScript } from '@servicenow/sdk/core'

ClientScript({
    $id: Now.ID['8be1fae047ed3650f487c24fe16d4324'],
    type: 'onChange',
    table: 'x_aleen_snguardian_identity_asset',
    isolateScript: true,
    script: Now.include('./sys_script_client_8be1fae047ed3650f487c24fe16d4324.client.js'),
    name: 'onChange Asset in IA',
    description: 'validate if mobile credential is supported in users location when asset changes',
    uiType: 'all',
    field: 'asset',
})
