import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['c88c35681bd946106962fe60cd4bcb6e'],
    description: 'Default access control on x_aleen_snguardian_review_task',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'create',
    roles: ['x_aleen_snguardian.review_admin'],
    table: 'x_aleen_snguardian_review_task',
})
