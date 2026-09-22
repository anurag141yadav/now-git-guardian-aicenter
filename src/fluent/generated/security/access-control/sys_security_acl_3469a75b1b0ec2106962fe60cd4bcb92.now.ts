import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['3469a75b1b0ec2106962fe60cd4bcb92'],
    description:
        'Allow read for records in x_aleen_snguardian_events_refined, for users with roles (x_aleen_snguardian.visitor, x_aleen_snguardian.employee).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_events_refined',
})
