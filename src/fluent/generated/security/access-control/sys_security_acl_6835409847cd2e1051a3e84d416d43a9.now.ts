import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['6835409847cd2e1051a3e84d416d43a9'],
    description: 'Default access control on x_aleen_snguardian_risk_mitigation',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'create',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_risk_mitigation',
})
