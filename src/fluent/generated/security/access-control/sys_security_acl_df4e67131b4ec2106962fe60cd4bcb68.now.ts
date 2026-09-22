import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['df4e67131b4ec2106962fe60cd4bcb68'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_events_refined',
})
