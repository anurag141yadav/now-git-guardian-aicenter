import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['1b4e67131b4ec2106962fe60cd4bcb55'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_system_function_type',
})
