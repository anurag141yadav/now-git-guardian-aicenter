import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['5a0c63c8474d2e1051a3e84d416d435b'],
    description: 'Default access control on x_aleen_snguardian_policy_enforcement',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_policy_enforcement',
})
