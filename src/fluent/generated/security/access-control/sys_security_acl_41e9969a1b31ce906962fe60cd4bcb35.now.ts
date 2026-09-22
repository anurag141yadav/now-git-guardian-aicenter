import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['41e9969a1b31ce906962fe60cd4bcb35'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'create',
    roles: ['x_aleen_snguardian.badging_officer'],
    table: 'x_aleen_snguardian_identity_system',
})
