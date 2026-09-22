import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['e67a54d32bb85210d4dffd74ce91bfba'],
    description:
        'Allow read for records in x_aleen_snguardian_visitor_visit_type, for users with roles (x_aleen_snguardian.employee, x_aleen_snguardian.visitor).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.visitor'],
    table: 'x_aleen_snguardian_visitor_visit_type',
})
