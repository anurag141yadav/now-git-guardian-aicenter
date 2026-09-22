import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['747d9c2c4789ea10f487c24fe16d43b5'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_risk_rule',
    field: 'evaluation_logic',
})
