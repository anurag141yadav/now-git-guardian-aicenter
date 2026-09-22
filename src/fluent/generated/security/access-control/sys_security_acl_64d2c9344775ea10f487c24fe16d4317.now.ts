import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['64d2c9344775ea10f487c24fe16d4317'],
    description:
        'Allow read for records in x_aleen_snguardian_identitytype, for users with roles (x_aleen_snguardian.employee, x_aleen_snguardian.visitor).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.host', 'x_aleen_snguardian.lobby_admin'],
    table: 'x_aleen_snguardian_identitytype',
})
