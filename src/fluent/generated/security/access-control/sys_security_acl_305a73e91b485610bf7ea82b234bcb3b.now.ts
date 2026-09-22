import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['305a73e91b485610bf7ea82b234bcb3b'],
    description: 'Default access control on x_aleen_snguardian_system_scheduled_job_history',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'create',
    roles: ['x_aleen_snguardian.badging_officer'],
    table: 'x_aleen_snguardian_system_scheduled_job_history',
})
