import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['2ef6f9381b14c6106962fe60cd4bcbcd'],
    description:
        'Allow read for records in x_aleen_snguardian_request, for users with roles (x_aleen_snguardian.employee, x_aleen_snguardian.visitor).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.host', 'x_aleen_snguardian.lobby_admin'],
    table: 'x_aleen_snguardian_request',
})
