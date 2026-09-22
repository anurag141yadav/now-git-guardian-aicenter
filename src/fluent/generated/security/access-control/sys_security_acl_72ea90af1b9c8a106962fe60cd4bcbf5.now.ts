import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['72ea90af1b9c8a106962fe60cd4bcbf5'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_asset_type',
})
