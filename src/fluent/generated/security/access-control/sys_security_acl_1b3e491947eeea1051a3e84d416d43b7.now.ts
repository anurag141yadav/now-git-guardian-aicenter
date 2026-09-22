import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['1b3e491947eeea1051a3e84d416d43b7'],
    description: 'Default access control on x_aleen_snguardian_provisioning_monitor',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'create',
    roles: ['x_aleen_snguardian.lobby_admin'],
    table: 'x_aleen_snguardian_provisioning_monitor',
})
