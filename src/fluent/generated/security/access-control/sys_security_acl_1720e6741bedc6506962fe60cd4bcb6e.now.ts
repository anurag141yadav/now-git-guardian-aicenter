import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['1720e6741bedc6506962fe60cd4bcb6e'],
    description:
        'Allow read for records in x_aleen_snguardian_access_owner, for users with roles (x_aleen_snguardian.employee, x_aleen_snguardian.visitor).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.access_reviewer'],
    table: 'x_aleen_snguardian_access_owner',
})
