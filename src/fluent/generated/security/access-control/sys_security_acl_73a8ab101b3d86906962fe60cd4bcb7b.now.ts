import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['73a8ab101b3d86906962fe60cd4bcb7b'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_system_field_mapping',
    field: 'script',
})
