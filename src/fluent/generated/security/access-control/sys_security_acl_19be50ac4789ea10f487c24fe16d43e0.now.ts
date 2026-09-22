import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['19be50ac4789ea10f487c24fe16d43e0'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_risk_rule',
    field: 'post_eval_action',
})
