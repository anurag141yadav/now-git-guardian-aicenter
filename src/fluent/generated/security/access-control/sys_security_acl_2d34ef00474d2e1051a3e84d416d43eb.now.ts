import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['2d34ef00474d2e1051a3e84d416d43eb'],
    description: 'Default access control on x_aleen_snguardian_policy',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_policy',
})
