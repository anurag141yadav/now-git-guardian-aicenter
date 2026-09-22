import { ClientScript } from '@servicenow/sdk/core'

ClientScript({
    $id: Now.ID['5a5e8b021b189e10207b2179b04bcb57'],
    type: 'onChange',
    table: 'x_aleen_snguardian_identity_access',
    isolateScript: true,
    script: Now.include('./sys_script_client_5a5e8b021b189e10207b2179b04bcb57.client.js'),
    name: 'Toggle Associated Asset (onChange)',
    uiType: 'all',
    field: 'access_level',
})
