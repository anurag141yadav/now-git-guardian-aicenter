import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['fec0671a1ba54a50759455342a4bcb25'],
    description: 'Default access control on x_aleen_snguardian_u_identity_asset_import_set',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'create',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_u_identity_asset_import_set',
})
