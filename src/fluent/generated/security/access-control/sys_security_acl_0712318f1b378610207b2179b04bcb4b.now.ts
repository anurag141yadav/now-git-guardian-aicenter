import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['0712318f1b378610207b2179b04bcb4b'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_system_scheduled_job',
})
