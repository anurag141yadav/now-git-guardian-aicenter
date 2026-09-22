import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['1b3e491947eeea1051a3e84d416d43d3'],
    description: 'Default access control on x_aleen_snguardian_provisioning_monitor',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.lobby_admin'],
    table: 'x_aleen_snguardian_provisioning_monitor',
})
