import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['3984272b2b71d210d4dffd74ce91bfd0'],
    description: 'Default access control on x_aleen_snguardian_visit_operation',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_visit_operation',
})
