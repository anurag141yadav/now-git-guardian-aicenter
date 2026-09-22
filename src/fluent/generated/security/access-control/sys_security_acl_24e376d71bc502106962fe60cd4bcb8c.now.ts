import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['24e376d71bc502106962fe60cd4bcb8c'],
    description:
        'Allow read for records in x_aleen_snguardian_reader_access_levels, for users with roles (x_aleen_snguardian.employee, x_aleen_snguardian.visitor).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.lobby_admin'],
    table: 'x_aleen_snguardian_reader_access_levels',
})
