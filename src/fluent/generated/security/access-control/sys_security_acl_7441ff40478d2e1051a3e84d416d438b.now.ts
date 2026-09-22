import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['7441ff40478d2e1051a3e84d416d438b'],
    description: 'Default access control on x_aleen_snguardian_policy_execution',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_policy_execution',
})
