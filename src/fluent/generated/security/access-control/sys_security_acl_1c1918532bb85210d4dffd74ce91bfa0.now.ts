import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['1c1918532bb85210d4dffd74ce91bfa0'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_visitor_watch_list',
})
