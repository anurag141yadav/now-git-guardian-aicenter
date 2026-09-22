import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['abd6e8ec478ff210f487c24fe16d43dd'],
    description: 'Default access control on x_aleen_snguardian_messages',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'create',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_messages',
})
