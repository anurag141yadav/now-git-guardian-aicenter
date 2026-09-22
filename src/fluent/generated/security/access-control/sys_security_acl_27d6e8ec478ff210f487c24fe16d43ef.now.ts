import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['27d6e8ec478ff210f487c24fe16d43ef'],
    description: 'Default access control on x_aleen_snguardian_messages',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_messages',
})
