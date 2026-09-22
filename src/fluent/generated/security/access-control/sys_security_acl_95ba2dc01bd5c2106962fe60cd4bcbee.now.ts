import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['95ba2dc01bd5c2106962fe60cd4bcbee'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'create',
    roles: ['x_aleen_snguardian.review_admin'],
    table: 'x_aleen_snguardian_review',
})
