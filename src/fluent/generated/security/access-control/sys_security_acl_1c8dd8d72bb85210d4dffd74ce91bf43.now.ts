import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['1c8dd8d72bb85210d4dffd74ce91bf43'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_visitor_visit',
})
