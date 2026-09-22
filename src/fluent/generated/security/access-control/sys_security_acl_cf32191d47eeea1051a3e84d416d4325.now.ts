import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['cf32191d47eeea1051a3e84d416d4325'],
    description: 'Default access control on x_aleen_snguardian_provisioning_queue',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.lobby_admin', 'x_aleen_snguardian.host'],
    table: 'x_aleen_snguardian_provisioning_queue',
})
