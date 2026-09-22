import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['03072c451b7402106962fe60cd4bcb6e'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_system_id_matching_rule',
})
