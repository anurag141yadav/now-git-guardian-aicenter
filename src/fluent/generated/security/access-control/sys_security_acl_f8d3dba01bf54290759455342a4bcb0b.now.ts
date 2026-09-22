import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['f8d3dba01bf54290759455342a4bcb0b'],
    description: 'Default access control on x_aleen_snguardian_u_identity_access_import_set',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'create',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_u_identity_access_import_set',
})
