import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['a035449847cd2e1051a3e84d416d4312'],
    description: 'Default access control on x_aleen_snguardian_risk_mitigation',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_risk_mitigation',
})
