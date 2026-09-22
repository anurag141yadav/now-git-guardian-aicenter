import { ClientScript } from '@servicenow/sdk/core'

ClientScript({
    $id: Now.ID['bf7814d133c2d610bf1221382e5c7b78'],
    type: 'onLoad',
    table: 'x_aleen_snguardian_visitor',
    isolateScript: true,
    script: Now.include('./sys_script_client_bf7814d133c2d610bf1221382e5c7b78.client.js'),
    name: 'Show ID verification For Lobbyadmin only',
    description: 'ID verification details should be visibile to Lobby admin only',
    uiType: 'all',
})
