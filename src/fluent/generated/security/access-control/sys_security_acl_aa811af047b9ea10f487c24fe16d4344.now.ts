import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['aa811af047b9ea10f487c24fe16d4344'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_u_event__import_set',
})
