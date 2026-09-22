import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['17b1b8932b3c5210d4dffd74ce91bf07'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'create',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_visitor_status',
})
