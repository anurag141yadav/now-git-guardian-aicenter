import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['110f04da1bc60a106962fe60cd4bcb5c'],
    description:
        'Allow read for records in x_aleen_snguardian_assertion, for users with roles (x_aleen_snguardian.visitor, x_aleen_snguardian.employee).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.host', 'x_aleen_snguardian.lobby_admin'],
    table: 'x_aleen_snguardian_assertion',
})
