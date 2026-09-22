import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['a835449847cd2e1051a3e84d416d4318'],
    description: 'Default access control on x_aleen_snguardian_risk_mitigation',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_risk_mitigation',
})
