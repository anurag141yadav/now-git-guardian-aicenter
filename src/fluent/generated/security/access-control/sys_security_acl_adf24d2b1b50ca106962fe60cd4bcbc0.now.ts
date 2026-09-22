import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['adf24d2b1b50ca106962fe60cd4bcbc0'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_provisioning_status',
})
