import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['71ca04201bb8ce506962fe60cd4bcbc3'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_request_activity',
})
