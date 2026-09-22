import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['57a7e3dc1bf986906962fe60cd4bcbc8'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_system_function',
    field: 'pre_validation_script',
})
