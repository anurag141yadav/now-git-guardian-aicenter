import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['3620a6741bedc6506962fe60cd4bcba8'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_access_owner',
})
