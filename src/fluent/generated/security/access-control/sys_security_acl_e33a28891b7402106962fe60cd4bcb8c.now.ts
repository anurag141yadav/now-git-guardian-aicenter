import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['e33a28891b7402106962fe60cd4bcb8c'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_u_asset_import_set',
})
