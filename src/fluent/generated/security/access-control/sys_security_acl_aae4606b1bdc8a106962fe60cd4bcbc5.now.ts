import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['aae4606b1bdc8a106962fe60cd4bcbc5'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_request_status',
})
