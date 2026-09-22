import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['2534ef00474d2e1051a3e84d416d43f2'],
    description: 'Default access control on x_aleen_snguardian_policy',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_policy',
})
