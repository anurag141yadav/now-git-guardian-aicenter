import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['10d289344775ea10f487c24fe16d43ca'],
    description:
        'Allow read for records in x_aleen_snguardian_asset_type, for users with roles (x_aleen_snguardian.visitor, x_aleen_snguardian.employee).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.kiosk'],
    table: 'x_aleen_snguardian_asset_type',
})
