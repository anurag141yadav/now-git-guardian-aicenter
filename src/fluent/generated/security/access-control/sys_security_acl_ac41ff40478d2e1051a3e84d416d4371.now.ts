import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['ac41ff40478d2e1051a3e84d416d4371'],
    description: 'Default access control on x_aleen_snguardian_policy_execution',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_policy_execution',
})
