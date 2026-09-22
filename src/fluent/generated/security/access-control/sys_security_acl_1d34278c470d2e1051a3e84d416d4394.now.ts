import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['1d34278c470d2e1051a3e84d416d4394'],
    description: 'Default access control on x_aleen_snguardian_policy',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'create',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_policy',
})
