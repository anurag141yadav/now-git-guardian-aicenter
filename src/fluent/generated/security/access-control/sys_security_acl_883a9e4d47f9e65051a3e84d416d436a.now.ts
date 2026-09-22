import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['883a9e4d47f9e65051a3e84d416d436a'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_system_scheduled_job',
    field: 'condition',
})
