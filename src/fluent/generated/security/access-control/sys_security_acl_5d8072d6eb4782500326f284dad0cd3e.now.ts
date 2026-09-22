import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['5d8072d6eb4782500326f284dad0cd3e'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_u_readers_import_set',
})
