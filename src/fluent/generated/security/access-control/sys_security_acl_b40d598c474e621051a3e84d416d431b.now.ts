import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['b40d598c474e621051a3e84d416d431b'],
    description: 'Default access control on x_aleen_snguardian_decision_table_choice',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_decision_table_choice',
})
