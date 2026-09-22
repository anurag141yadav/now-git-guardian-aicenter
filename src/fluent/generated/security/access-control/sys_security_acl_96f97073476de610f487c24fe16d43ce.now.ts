import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['96f97073476de610f487c24fe16d43ce'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_risk_compliance',
})
