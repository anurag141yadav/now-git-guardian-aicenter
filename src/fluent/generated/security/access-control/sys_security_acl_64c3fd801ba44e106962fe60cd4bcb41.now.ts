import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['64c3fd801ba44e106962fe60cd4bcb41'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_access_location',
})
