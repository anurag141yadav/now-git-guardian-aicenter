import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['8984953f33825250bf1221382e5c7bbc'],
    description: 'Default access control on x_aleen_snguardian_rule_master_config',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_rule_master_config',
})
