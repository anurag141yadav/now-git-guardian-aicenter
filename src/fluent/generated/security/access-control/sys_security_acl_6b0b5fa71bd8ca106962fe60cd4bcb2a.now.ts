import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['6b0b5fa71bd8ca106962fe60cd4bcb2a'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'create',
    roles: ['x_aleen_snguardian.lobby_admin'],
    table: 'x_aleen_snguardian_asset',
})
