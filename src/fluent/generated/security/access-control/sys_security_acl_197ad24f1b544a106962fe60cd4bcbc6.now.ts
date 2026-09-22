import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['197ad24f1b544a106962fe60cd4bcbc6'],
    description: 'Default access control on x_aleen_snguardian_u_metadata_import_set',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_u_metadata_import_set',
})
