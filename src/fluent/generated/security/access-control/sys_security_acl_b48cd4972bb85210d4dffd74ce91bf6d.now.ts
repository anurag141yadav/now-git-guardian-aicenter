import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['b48cd4972bb85210d4dffd74ce91bf6d'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_visitor_mt_visit_status',
})
