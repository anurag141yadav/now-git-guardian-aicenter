import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['04d289344775ea10f487c24fe16d4360'],
    description:
        'Allow read for records in x_aleen_snguardian_rule_master_config, for users with roles (x_aleen_snguardian.employee, x_aleen_snguardian.visitor).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.kiosk'],
    table: 'x_aleen_snguardian_rule_master_config',
})
