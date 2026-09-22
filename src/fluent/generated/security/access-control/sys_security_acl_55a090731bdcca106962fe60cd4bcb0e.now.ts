import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['55a090731bdcca106962fe60cd4bcb0e'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'create',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_system_parameters',
})
