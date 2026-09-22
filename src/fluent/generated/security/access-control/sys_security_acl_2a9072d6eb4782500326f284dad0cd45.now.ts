import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['2a9072d6eb4782500326f284dad0cd45'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_u_readers_import_set',
})
