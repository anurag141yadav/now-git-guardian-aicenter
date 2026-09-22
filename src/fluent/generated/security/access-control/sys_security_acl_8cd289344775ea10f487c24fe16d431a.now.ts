import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['8cd289344775ea10f487c24fe16d431a'],
    description:
        'Allow read for records in x_aleen_snguardian_access_level, for users with roles (x_aleen_snguardian.visitor, x_aleen_snguardian.employee).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.kiosk'],
    table: 'x_aleen_snguardian_access_level',
})
