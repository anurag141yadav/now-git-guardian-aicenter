import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['2bd6e8ec478ff210f487c24fe16d43f6'],
    description: 'Default access control on x_aleen_snguardian_messages',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_messages',
})
