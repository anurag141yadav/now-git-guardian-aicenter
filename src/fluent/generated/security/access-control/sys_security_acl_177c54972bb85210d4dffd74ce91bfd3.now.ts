import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['177c54972bb85210d4dffd74ce91bfd3'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_visitor_mt_visit_status',
})
