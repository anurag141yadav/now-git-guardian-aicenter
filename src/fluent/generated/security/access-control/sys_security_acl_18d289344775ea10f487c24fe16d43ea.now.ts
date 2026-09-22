import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['18d289344775ea10f487c24fe16d43ea'],
    description:
        'Allow read for records in x_aleen_snguardian_u_system_config_importset, for users with roles (x_aleen_snguardian.visitor, x_aleen_snguardian.employee).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_u_system_config_importset',
})
