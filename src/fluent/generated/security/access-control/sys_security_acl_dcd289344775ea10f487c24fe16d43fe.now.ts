import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['dcd289344775ea10f487c24fe16d43fe'],
    description:
        'Allow read for records in x_aleen_snguardian_risk, for users with roles (x_aleen_snguardian.visitor, x_aleen_snguardian.employee).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_risk',
})
