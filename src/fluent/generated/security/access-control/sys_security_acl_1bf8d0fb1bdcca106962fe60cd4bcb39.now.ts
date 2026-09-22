import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['1bf8d0fb1bdcca106962fe60cd4bcb39'],
    description:
        'Allow read for records in x_aleen_snguardian_system_function, for users with roles (x_aleen_snguardian.visitor, x_aleen_snguardian.employee).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.kiosk'],
    table: 'x_aleen_snguardian_system_function',
})
