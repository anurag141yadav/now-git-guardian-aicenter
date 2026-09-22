import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['4184953f33825250bf1221382e5c7bc4'],
    description: 'Default access control on x_aleen_snguardian_rule_master_config',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_rule_master_config',
})
