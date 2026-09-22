import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['07072c451b7402106962fe60cd4bcb57'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_identity_location',
})
