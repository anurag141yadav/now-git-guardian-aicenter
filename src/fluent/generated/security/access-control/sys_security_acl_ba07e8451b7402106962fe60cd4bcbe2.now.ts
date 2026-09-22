import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['ba07e8451b7402106962fe60cd4bcbe2'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_identity',
})
