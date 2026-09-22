import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['860e38e0a82dda10d1699f6b919f7106'],
    localOrExisting: 'Local',
    type: 'ux_route',
    operation: 'read',
    roles: ['x_aleen_snguardian.lobby_admin'],
    name: 'x.aleen.lobby-admin-workspace.*',
})
