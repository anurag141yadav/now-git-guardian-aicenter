import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['92ba04781b514610759455342a4bcbe3'],
    description:
        'Allow read for records in x_aleen_snguardian_system_scheduled_job, for users with roles (x_aleen_snguardian.employee, x_aleen_snguardian.visitor).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.badging_officer'],
    table: 'x_aleen_snguardian_system_scheduled_job',
})
