import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['70c1f8932b3c5210d4dffd74ce91bff4'],
    description:
        'Allow read for records in x_aleen_snguardian_visitor_status, for users with roles (x_aleen_snguardian.visitor, x_aleen_snguardian.employee).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.visitor'],
    table: 'x_aleen_snguardian_visitor_status',
})
