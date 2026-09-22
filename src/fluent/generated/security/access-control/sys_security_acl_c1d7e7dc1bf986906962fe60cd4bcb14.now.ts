import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['c1d7e7dc1bf986906962fe60cd4bcb14'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_system_function',
    field: 'payload_handler',
})
