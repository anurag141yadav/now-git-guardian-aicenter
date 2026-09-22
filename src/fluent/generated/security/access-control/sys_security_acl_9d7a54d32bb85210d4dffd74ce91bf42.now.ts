import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['9d7a54d32bb85210d4dffd74ce91bf42'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_visitor_visit_type',
})
