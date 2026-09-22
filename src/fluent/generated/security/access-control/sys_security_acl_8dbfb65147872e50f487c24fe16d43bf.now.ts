import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['8dbfb65147872e50f487c24fe16d43bf'],
    description: 'Default access control on x_aleen_snguardian_provisioning_monitor',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_provisioning_monitor',
})
