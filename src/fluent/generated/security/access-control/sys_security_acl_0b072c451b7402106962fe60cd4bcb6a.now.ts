import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['0b072c451b7402106962fe60cd4bcb6a'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_request_activity',
})
