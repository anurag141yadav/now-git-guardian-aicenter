import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['305a73e91b485610bf7ea82b234bcb4f'],
    description: 'Default access control on x_aleen_snguardian_system_scheduled_job_history',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_system_scheduled_job_history',
})
