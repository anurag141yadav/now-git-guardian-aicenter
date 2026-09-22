import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['37ade7df1b0ec2106962fe60cd4bcb25'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_access_location',
})
