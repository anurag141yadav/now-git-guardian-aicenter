import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['2f4d2f9f1b0ec2106962fe60cd4bcb31'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_badge_office',
})
