import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['e2e4606b1bdc8a106962fe60cd4bcbba'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'create',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_request_status',
})
