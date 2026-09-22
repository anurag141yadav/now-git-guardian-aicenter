import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['200d598c474e621051a3e84d416d430d'],
    description: 'Default access control on x_aleen_snguardian_decision_table_choice',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.host', 'x_aleen_snguardian.lobby_admin'],
    table: 'x_aleen_snguardian_decision_table_choice',
})
