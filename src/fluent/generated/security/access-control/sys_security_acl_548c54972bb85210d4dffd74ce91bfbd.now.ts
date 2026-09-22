import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['548c54972bb85210d4dffd74ce91bfbd'],
    description:
        'Allow read for records in x_aleen_snguardian_visitor_mt_visit_status, for users with roles (x_aleen_snguardian.visitor, x_aleen_snguardian.employee).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.visitor'],
    table: 'x_aleen_snguardian_visitor_mt_visit_status',
})
