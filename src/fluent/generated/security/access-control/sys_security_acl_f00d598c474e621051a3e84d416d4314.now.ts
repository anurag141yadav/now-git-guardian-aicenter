import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['f00d598c474e621051a3e84d416d4314'],
    description: 'Default access control on x_aleen_snguardian_decision_table_choice',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_decision_table_choice',
})
