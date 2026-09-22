import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['e78182f14745265051a3e84d416d436d'],
    description: 'Default access control on x_aleen_snguardian_risk_owner',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_risk_owner',
})
