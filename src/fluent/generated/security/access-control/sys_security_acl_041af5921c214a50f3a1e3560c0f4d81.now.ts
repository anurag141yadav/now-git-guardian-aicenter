import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['041af5921c214a50f3a1e3560c0f4d81'],
    localOrExisting: 'Local',
    type: 'ux_route',
    operation: 'read',
    roles: ['x_aleen_snguardian.access_reviewer'],
    name: 'x.aleen.access-reviewer-workspace.*',
})
