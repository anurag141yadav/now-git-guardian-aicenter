import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['1848a0851b7402106962fe60cd4bcb13'],
    description:
        'Allow read for records in x_aleen_snguardian_identity, for users with roles (x_aleen_snguardian.visitor, x_aleen_snguardian.employee).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.host', 'x_aleen_snguardian.kiosk', 'x_aleen_snguardian.lobby_admin'],
    table: 'x_aleen_snguardian_identity',
})
