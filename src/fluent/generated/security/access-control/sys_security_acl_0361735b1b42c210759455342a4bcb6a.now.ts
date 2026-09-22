import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['0361735b1b42c210759455342a4bcb6a'],
    localOrExisting: 'Local',
    type: 'ux_route',
    operation: 'read',
    roles: ['x_aleen_snguardian.manager'],
    name: 'x.aleen.guardian-data-manager-workspace.*',
})
