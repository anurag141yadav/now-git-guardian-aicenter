import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['7500f19e1be88250759455342a4bcb5e'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_u_import_set_user',
})
