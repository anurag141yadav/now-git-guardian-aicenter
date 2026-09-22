import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['3efb98572bb85210d4dffd74ce91bfc4'],
    description:
        'Allow read for records in x_aleen_snguardian_visitor, for users with roles (x_aleen_snguardian.visitor, x_aleen_snguardian.employee).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.visitor'],
    table: 'x_aleen_snguardian_visitor',
})
