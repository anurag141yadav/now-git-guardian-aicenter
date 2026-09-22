import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['64f0c41447cd2e1051a3e84d416d430e'],
    description: 'Default access control on x_aleen_snguardian_risk_instance',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_risk_instance',
})
