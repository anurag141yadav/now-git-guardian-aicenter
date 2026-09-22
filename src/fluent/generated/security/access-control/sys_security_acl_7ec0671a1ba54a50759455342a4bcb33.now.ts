import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['7ec0671a1ba54a50759455342a4bcb33'],
    description: 'Default access control on x_aleen_snguardian_u_identity_asset_import_set',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_u_identity_asset_import_set',
})
