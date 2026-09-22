import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['76d968491b7402106962fe60cd4bcb8e'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_u_access_level_import_set',
})
