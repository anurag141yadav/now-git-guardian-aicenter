import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['25790d0c1b6c8a10759455342a4bcb32'],
    description:
        'Allow read for records in x_aleen_snguardian_system_field_mapping, for users with roles (x_aleen_snguardian.visitor, x_aleen_snguardian.employee).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.lobby_admin'],
    table: 'x_aleen_snguardian_system_field_mapping',
})
