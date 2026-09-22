import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['dcd289344775ea10f487c24fe16d43c5'],
    description:
        'Allow read for records in x_aleen_snguardian_u_identity_asset_import_set, for users with roles (x_aleen_snguardian.visitor, x_aleen_snguardian.employee).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_u_identity_asset_import_set',
})
