import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['534e67131b4ec2106962fe60cd4bcb3b'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_location',
})
