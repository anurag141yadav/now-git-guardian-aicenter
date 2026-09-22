import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['238182f14745265051a3e84d416d435e'],
    description: 'Default access control on x_aleen_snguardian_risk_owner',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'create',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_risk_owner',
})
