import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['27ade7df1b0ec2106962fe60cd4bcb17'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_system_features',
})
