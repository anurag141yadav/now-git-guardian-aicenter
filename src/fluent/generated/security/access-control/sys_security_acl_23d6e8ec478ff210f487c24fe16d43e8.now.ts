import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['23d6e8ec478ff210f487c24fe16d43e8'],
    description: 'Default access control on x_aleen_snguardian_messages',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.visitor'],
    table: 'x_aleen_snguardian_messages',
})
