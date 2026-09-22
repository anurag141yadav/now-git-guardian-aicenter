import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['bea9b5521e214a5013d5de4cbce69a61'],
    localOrExisting: 'Local',
    type: 'ux_route',
    operation: 'read',
    roles: ['x_aleen_snguardian.review_admin'],
    name: 'x.aleen.review-admin-workspace.*',
})
