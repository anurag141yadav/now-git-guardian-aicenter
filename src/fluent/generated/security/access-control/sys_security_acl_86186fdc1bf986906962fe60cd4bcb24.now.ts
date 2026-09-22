import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['86186fdc1bf986906962fe60cd4bcb24'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_system_function',
    field: 'error_response_handler',
})
