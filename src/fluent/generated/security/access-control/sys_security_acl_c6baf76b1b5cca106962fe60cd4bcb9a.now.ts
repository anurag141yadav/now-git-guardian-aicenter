import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['c6baf76b1b5cca106962fe60cd4bcb9a'],
    description:
        'Allow read for records in x_aleen_snguardian_system_function_type, for users with roles (x_aleen_snguardian.employee, x_aleen_snguardian.visitor).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.lobby_admin'],
    table: 'x_aleen_snguardian_system_function_type',
})
