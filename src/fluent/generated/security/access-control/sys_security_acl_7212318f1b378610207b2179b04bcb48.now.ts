import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['7212318f1b378610207b2179b04bcb48'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_system_scheduled_job',
})
