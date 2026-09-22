import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['41d036d6eb4782500326f284dad0cd85'],
    description:
        'Allow read for records in x_aleen_snguardian_u_trainngs_import_set, for users with roles (x_aleen_snguardian.employee, x_aleen_snguardian.visitor).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_u_trainngs_import_set',
})
