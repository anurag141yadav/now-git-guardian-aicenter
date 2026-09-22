import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['94f68a384779ea10f487c24fe16d43a0'],
    description:
        'Allow read for records in x_aleen_snguardian_system_features, for users with roles (x_aleen_snguardian.visitor, x_aleen_snguardian.employee).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.lobby_admin', 'x_aleen_snguardian.kiosk', 'x_aleen_snguardian.host'],
    table: 'x_aleen_snguardian_system_features',
})
