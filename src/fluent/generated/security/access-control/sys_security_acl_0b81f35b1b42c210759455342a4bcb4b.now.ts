import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['0b81f35b1b42c210759455342a4bcb4b'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_review',
})
