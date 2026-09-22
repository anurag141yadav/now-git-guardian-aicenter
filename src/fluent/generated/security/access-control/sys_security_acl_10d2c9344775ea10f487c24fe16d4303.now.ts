import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['10d2c9344775ea10f487c24fe16d4303'],
    description:
        'Allow read for records in x_aleen_snguardian_risk_compliance, for users with roles (x_aleen_snguardian.employee, x_aleen_snguardian.visitor).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_risk_compliance',
})
