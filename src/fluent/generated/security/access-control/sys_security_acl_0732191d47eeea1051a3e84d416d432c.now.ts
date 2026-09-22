import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['0732191d47eeea1051a3e84d416d432c'],
    description: 'Default access control on x_aleen_snguardian_provisioning_queue',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.lobby_admin'],
    table: 'x_aleen_snguardian_provisioning_queue',
})
