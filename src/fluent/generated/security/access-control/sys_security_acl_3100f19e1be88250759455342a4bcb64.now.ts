import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['3100f19e1be88250759455342a4bcb64'],
    description:
        'Allow read for records in x_aleen_snguardian_u_import_set_user, for users with roles (x_aleen_snguardian.visitor, x_aleen_snguardian.employee).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_u_import_set_user',
})
