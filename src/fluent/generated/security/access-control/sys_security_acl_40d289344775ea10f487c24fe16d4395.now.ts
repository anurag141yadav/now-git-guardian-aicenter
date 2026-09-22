import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['40d289344775ea10f487c24fe16d4395'],
    description:
        'Allow read for records in x_aleen_snguardian_status_code, for users with roles (x_aleen_snguardian.employee, x_aleen_snguardian.visitor).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.visitor'],
    table: 'x_aleen_snguardian_status_code',
})
