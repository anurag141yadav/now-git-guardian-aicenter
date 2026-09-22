import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['6256fe9b1bc502106962fe60cd4bcb4a'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_review_task',
})
