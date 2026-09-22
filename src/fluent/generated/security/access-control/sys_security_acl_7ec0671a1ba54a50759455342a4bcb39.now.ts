import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['7ec0671a1ba54a50759455342a4bcb39'],
    description: 'Default access control on x_aleen_snguardian_u_identity_asset_import_set',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_u_identity_asset_import_set',
})
