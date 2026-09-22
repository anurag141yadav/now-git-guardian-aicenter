import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['4dd3dba01bf54290759455342a4bcb3e'],
    description: 'Default access control on x_aleen_snguardian_u_identity_access_import_set',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_u_identity_access_import_set',
})
