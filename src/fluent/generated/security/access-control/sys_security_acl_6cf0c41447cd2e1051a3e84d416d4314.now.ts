import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['6cf0c41447cd2e1051a3e84d416d4314'],
    description: 'Default access control on x_aleen_snguardian_risk_instance',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_risk_instance',
})
