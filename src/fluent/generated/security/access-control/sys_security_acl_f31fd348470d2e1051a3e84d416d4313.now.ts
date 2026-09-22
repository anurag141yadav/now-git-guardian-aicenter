import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['f31fd348470d2e1051a3e84d416d4313'],
    description: 'Default access control on x_aleen_snguardian_risk_rule',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_risk_rule',
})
