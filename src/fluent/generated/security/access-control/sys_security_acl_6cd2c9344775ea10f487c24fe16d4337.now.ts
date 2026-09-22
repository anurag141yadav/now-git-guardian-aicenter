import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['6cd2c9344775ea10f487c24fe16d4337'],
    description:
        'Allow read for records in x_aleen_snguardian_asset_analytics_log, for users with roles (x_aleen_snguardian.visitor, x_aleen_snguardian.employee).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_asset_analytics_log',
})
