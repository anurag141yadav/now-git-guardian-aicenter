import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['f51b0fe6d97502d0af4817472cab53e7'],
    localOrExisting: 'Local',
    type: 'ux_route',
    operation: 'read',
    roles: ['x_aleen_snguardian.badging_officer'],
    name: 'x.aleen.guardian-badge-office-workspace.*',
})
