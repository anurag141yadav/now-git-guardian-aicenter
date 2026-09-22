import { ClientScript } from '@servicenow/sdk/core'

ClientScript({
    $id: Now.ID['6212f02e1b118e106962fe60cd4bcba9'],
    type: 'onLoad',
    table: 'x_aleen_snguardian_review',
    isolateScript: true,
    script: Now.include('./sys_script_client_6212f02e1b118e106962fe60cd4bcba9.client.js'),
    name: 'Set Review Type Draft for New Review',
    uiType: 'all',
})
