import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['317867101b3d86906962fe60cd4bcbae'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_system_id_matching_rule',
    field: 'script',
})
