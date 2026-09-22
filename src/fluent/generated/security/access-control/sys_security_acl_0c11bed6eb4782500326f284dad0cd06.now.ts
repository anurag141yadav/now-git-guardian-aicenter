import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['0c11bed6eb4782500326f284dad0cd06'],
    description:
        'Allow delete for records in x_aleen_snguardian_u_trainngs_import_set, for users with role x_aleen_snguardian.employee.',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_u_trainngs_import_set',
})
