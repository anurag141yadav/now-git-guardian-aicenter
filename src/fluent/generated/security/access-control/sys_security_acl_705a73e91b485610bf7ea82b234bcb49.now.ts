import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['705a73e91b485610bf7ea82b234bcb49'],
    description: 'Default access control on x_aleen_snguardian_system_scheduled_job_history',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_system_scheduled_job_history',
})
