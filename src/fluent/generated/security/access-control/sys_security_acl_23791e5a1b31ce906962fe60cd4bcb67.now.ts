import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['23791e5a1b31ce906962fe60cd4bcb67'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.access_reviewer'],
    table: 'x_aleen_snguardian_identity_system',
})
