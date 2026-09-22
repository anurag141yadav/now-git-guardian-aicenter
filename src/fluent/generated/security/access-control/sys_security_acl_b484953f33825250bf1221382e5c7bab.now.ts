import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['b484953f33825250bf1221382e5c7bab'],
    description: 'Default access control on x_aleen_snguardian_rule_master_config',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'create',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_rule_master_config',
})
