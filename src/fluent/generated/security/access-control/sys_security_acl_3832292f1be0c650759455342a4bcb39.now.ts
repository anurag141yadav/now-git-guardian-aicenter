import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['3832292f1be0c650759455342a4bcb39'],
    description:
        'Allow read for records in x_aleen_snguardian_u_asset_import_set, for users with roles (x_aleen_snguardian.employee, x_aleen_snguardian.visitor).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_u_asset_import_set',
})
