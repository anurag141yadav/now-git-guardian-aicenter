import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['7c41ff40478d2e1051a3e84d416d4384'],
    description: 'Default access control on x_aleen_snguardian_policy_execution',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_policy_execution',
})
