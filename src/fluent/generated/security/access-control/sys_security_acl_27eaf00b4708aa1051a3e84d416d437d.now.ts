import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['27eaf00b4708aa1051a3e84d416d437d'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_u_event__import_set',
})
