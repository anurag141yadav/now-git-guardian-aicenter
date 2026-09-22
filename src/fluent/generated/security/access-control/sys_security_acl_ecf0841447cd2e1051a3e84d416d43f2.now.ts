import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['ecf0841447cd2e1051a3e84d416d43f2'],
    description: 'Default access control on x_aleen_snguardian_risk_instance',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'create',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_risk_instance',
})
