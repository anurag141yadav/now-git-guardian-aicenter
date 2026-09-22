import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['04d289344775ea10f487c24fe16d4354'],
    description:
        'Allow read for records in x_aleen_snguardian_asset_location, for users with roles (x_aleen_snguardian.visitor, x_aleen_snguardian.employee).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.kiosk'],
    table: 'x_aleen_snguardian_asset_location',
})
