import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['e3a589d047cdaa10f487c24fe16d43a4'],
    localOrExisting: 'Local',
    adminOverrides: false,
    type: 'ux_route',
    operation: 'read',
    roles: ['x_aleen_snguardian.admin'],
    name: 'x.aleen.visitor-management-workspace.*',
    protectionPolicy: 'protected',
})
