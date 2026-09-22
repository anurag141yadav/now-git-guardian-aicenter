import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['d2f97073476de610f487c24fe16d43c2'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_risk',
})
