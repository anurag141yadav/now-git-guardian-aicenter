import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['d6f97073476de610f487c24fe16d43d2'],
    description:
        'Allow delete for records in x_aleen_snguardian_risk_compliance, for users with role x_aleen_snguardian.manager.',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_risk_compliance',
})
