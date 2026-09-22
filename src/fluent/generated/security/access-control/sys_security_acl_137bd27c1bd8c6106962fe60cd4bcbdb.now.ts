import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['137bd27c1bd8c6106962fe60cd4bcbdb'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_identitytype',
})
