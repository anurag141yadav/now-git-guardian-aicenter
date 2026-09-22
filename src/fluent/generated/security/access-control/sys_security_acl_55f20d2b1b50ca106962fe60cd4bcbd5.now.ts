import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['55f20d2b1b50ca106962fe60cd4bcbd5'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'create',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_provisioning_status',
})
