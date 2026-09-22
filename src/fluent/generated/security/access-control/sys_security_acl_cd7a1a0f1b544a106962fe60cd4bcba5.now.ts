import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['cd7a1a0f1b544a106962fe60cd4bcba5'],
    description: 'Default access control on x_aleen_snguardian_u_metadata_import_set',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'create',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_u_metadata_import_set',
})
