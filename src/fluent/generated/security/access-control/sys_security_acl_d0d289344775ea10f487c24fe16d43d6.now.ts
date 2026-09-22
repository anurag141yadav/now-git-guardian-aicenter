import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['d0d289344775ea10f487c24fe16d43d6'],
    description:
        'Allow read for records in x_aleen_snguardian_asset, for users with roles (x_aleen_snguardian.visitor, x_aleen_snguardian.employee).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.kiosk'],
    table: 'x_aleen_snguardian_asset',
})
