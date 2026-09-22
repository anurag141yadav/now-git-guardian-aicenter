import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['09d3dba01bf54290759455342a4bcb44'],
    description: 'Default access control on x_aleen_snguardian_u_identity_access_import_set',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_u_identity_access_import_set',
})
