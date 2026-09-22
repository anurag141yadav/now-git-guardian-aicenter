import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['ef8182f14745265051a3e84d416d4373'],
    description: 'Default access control on x_aleen_snguardian_risk_owner',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_risk_owner',
})
