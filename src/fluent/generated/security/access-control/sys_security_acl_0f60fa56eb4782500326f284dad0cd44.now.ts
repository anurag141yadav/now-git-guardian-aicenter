import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['0f60fa56eb4782500326f284dad0cd44'],
    description:
        'Allow read for records in x_aleen_snguardian_u_readers_import_set, for users with roles (x_aleen_snguardian.employee, x_aleen_snguardian.visitor).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_u_readers_import_set',
})
