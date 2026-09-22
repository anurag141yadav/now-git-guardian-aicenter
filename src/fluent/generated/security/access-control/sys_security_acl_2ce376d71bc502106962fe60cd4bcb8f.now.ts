import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['2ce376d71bc502106962fe60cd4bcb8f'],
    description:
        'Allow read for records in x_aleen_snguardian_event, for users with roles (x_aleen_snguardian.employee, x_aleen_snguardian.visitor).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.badging_officer', 'x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_event',
})
