import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['5ebaf76b1b5cca106962fe60cd4bcbf5'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_system_function_type',
})
