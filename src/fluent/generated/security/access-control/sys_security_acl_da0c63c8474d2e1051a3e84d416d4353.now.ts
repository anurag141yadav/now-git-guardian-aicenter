import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['da0c63c8474d2e1051a3e84d416d4353'],
    description: 'Default access control on x_aleen_snguardian_policy_enforcement',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'create',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_policy_enforcement',
})
