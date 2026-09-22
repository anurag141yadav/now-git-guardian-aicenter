import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['37ade7df1b0ec2106962fe60cd4bcb1e'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_status_code',
})
