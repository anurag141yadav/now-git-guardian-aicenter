import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['e1a090731bdcca106962fe60cd4bcbe8'],
    description:
        'Allow read for records in x_aleen_snguardian_system_parameters, for users with roles (x_aleen_snguardian.visitor, x_aleen_snguardian.employee).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.kiosk'],
    table: 'x_aleen_snguardian_system_parameters',
})
