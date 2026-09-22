import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['d33e491947eeea1051a3e84d416d43cd'],
    description: 'Default access control on x_aleen_snguardian_provisioning_monitor',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.lobby_admin', 'x_aleen_snguardian.host'],
    table: 'x_aleen_snguardian_provisioning_monitor',
})
