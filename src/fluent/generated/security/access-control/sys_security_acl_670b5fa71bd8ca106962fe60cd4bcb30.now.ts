import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['670b5fa71bd8ca106962fe60cd4bcb30'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.lobby_admin', 'x_aleen_snguardian.access_reviewer'],
    table: 'x_aleen_snguardian_asset',
})
