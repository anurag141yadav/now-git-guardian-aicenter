import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['5941dc731bdcca106962fe60cd4bcbbf'],
    description:
        'Allow read for records in x_aleen_snguardian_system_id_matching_rule, for users with roles (x_aleen_snguardian.employee, x_aleen_snguardian.visitor).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.lobby_admin'],
    table: 'x_aleen_snguardian_system_id_matching_rule',
})
