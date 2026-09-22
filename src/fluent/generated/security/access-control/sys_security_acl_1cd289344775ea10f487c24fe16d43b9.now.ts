import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['1cd289344775ea10f487c24fe16d43b9'],
    description:
        'Allow read for records in x_aleen_snguardian_provisioning_status, for users with roles (x_aleen_snguardian.visitor, x_aleen_snguardian.employee).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.host', 'x_aleen_snguardian.lobby_admin'],
    table: 'x_aleen_snguardian_provisioning_status',
})
