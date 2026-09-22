import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['5b32191d47eeea1051a3e84d416d4332'],
    description: 'Default access control on x_aleen_snguardian_provisioning_queue',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_provisioning_queue',
})
