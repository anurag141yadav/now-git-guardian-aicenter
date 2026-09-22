import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['9b4e67131b4ec2106962fe60cd4bcb27'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_request_status',
})
