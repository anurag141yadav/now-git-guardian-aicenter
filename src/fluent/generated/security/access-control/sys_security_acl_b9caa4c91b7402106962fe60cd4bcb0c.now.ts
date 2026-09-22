import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['b9caa4c91b7402106962fe60cd4bcb0c'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_u_import_set_user',
})
