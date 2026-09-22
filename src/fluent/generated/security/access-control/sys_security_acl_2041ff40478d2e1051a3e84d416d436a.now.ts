import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['2041ff40478d2e1051a3e84d416d436a'],
    description: 'Default access control on x_aleen_snguardian_policy_execution',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'create',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_policy_execution',
})
