import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['da2955911bf88210759455342a4bcb2d'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_u_system_config_importset',
})
