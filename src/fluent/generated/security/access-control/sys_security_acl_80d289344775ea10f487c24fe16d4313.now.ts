import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['80d289344775ea10f487c24fe16d4313'],
    description:
        'Allow read for records in x_aleen_snguardian_u_identity_access_import_set, for users with roles (x_aleen_snguardian.visitor, x_aleen_snguardian.employee).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_u_identity_access_import_set',
})
