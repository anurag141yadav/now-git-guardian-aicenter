import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['e0030f7a1bfd4a90759455342a4bcbaf'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_identity',
})
