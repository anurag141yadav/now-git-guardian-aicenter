import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['2787ea5b1b8502106962fe60cd4bcbb6'],
    description: 'Default access control on x_aleen_snguardian_event',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_event',
})
