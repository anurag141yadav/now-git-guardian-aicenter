import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['350e346b1b60c650759455342a4bcb5c'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_u_asset_import_set',
})
