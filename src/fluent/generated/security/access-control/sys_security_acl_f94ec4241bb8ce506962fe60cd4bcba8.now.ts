import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['f94ec4241bb8ce506962fe60cd4bcba8'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_u_request_activity_import_set',
})
