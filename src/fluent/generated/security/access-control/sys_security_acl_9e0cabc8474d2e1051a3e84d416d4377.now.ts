import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['9e0cabc8474d2e1051a3e84d416d4377'],
    description: 'Default access control on x_aleen_snguardian_policy_enforcement',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_policy_enforcement',
})
