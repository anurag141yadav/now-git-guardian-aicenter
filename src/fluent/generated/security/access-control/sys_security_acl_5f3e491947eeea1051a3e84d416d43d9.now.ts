import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['5f3e491947eeea1051a3e84d416d43d9'],
    description: 'Default access control on x_aleen_snguardian_provisioning_monitor',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_provisioning_monitor',
})
