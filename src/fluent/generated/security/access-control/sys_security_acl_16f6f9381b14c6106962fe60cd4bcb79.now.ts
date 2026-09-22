import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['16f6f9381b14c6106962fe60cd4bcb79'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.lobby_admin'],
    table: 'x_aleen_snguardian_request',
})
