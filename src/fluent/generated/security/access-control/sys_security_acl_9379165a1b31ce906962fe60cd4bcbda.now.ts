import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['9379165a1b31ce906962fe60cd4bcbda'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.access_reviewer'],
    table: 'x_aleen_snguardian_identity_asset',
})
