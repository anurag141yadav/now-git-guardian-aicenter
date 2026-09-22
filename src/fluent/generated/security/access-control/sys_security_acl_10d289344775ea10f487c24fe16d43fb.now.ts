import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['10d289344775ea10f487c24fe16d43fb'],
    description:
        'Allow read for records in x_aleen_snguardian_system_owner, for users with roles (x_aleen_snguardian.visitor, x_aleen_snguardian.employee).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.lobby_admin'],
    table: 'x_aleen_snguardian_system_owner',
})
