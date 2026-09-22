import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['c82fd348470d2e1051a3e84d416d4319'],
    description: 'Default access control on x_aleen_snguardian_risk_rule',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_risk_rule',
})
