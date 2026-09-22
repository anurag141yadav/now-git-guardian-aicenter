import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['542938702bda9a50d4dffd74ce91bfc7'],
    description:
        'Allow read for records in x_aleen_snguardian_visit_operation, for users with roles (x_aleen_snguardian.employee, x_aleen_snguardian.visitor).',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.visitor'],
    table: 'x_aleen_snguardian_visit_operation',
})
