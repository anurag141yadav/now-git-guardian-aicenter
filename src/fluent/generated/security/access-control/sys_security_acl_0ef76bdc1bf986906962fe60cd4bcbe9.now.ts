import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['0ef76bdc1bf986906962fe60cd4bcbe9'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_system_function',
    field: 'success_response_handler',
})
