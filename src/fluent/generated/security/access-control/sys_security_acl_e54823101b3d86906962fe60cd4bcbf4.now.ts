import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['e54823101b3d86906962fe60cd4bcbf4'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_system_scheduled_job',
    field: 'script',
})
