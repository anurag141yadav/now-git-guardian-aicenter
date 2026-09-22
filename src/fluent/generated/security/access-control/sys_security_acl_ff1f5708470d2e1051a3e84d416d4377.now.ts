import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['ff1f5708470d2e1051a3e84d416d4377'],
    description: 'Default access control on x_aleen_snguardian_risk_rule',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'create',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_risk_rule',
})
