import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['a4e018731bdcca106962fe60cd4bcb30'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_system_owner',
})
