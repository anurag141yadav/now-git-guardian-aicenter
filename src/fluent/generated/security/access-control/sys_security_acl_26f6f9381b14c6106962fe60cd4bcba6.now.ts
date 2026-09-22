import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['26f6f9381b14c6106962fe60cd4bcba6'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'create',
    roles: ['x_aleen_snguardian.lobby_admin', 'x_aleen_snguardian.host'],
    table: 'x_aleen_snguardian_request',
})
