import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['4732191d47eeea1051a3e84d416d431e'],
    description: 'Default access control on x_aleen_snguardian_provisioning_queue',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'create',
    roles: ['x_aleen_snguardian.lobby_admin'],
    table: 'x_aleen_snguardian_provisioning_queue',
})
