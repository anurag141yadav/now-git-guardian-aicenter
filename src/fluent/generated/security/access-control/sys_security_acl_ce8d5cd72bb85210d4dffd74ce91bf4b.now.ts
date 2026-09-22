import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['ce8d5cd72bb85210d4dffd74ce91bf4b'],
    description:
        'Allow read for records in x_aleen_snguardian_visitor_visit, for users with roles (x_aleen_snguardian.visitor, x_aleen_snguardian.employee).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.visitor'],
    table: 'x_aleen_snguardian_visitor_visit',
})
