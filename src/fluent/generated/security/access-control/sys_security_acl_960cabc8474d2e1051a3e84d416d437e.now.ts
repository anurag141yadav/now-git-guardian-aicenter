import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['960cabc8474d2e1051a3e84d416d437e'],
    description: 'Default access control on x_aleen_snguardian_policy_enforcement',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_policy_enforcement',
})
