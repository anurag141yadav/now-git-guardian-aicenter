import { ClientScript } from '@servicenow/sdk/core'

ClientScript({
    $id: Now.ID['4fdd74691b901e10207b2179b04bcb0c'],
    type: 'onLoad',
    table: 'x_aleen_snguardian_identity_access',
    isolateScript: true,
    script: Now.include('./sys_script_client_4fdd74691b901e10207b2179b04bcb0c.client.js'),
    name: 'Hide Associated Asset Field ( onLoad)',
    uiType: 'all',
})
