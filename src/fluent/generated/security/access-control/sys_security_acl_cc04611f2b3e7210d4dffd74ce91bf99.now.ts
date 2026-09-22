import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['cc04611f2b3e7210d4dffd74ce91bf99'],
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_visitor_status',
})
