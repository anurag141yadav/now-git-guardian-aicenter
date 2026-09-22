import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['92cc2a9e2bbeda50d4dffd74ce91bf2a'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'create',
    roles: ['x_aleen_snguardian.lobby_admin'],
    table: 'x_aleen_snguardian_visitor_watch_list',
})
