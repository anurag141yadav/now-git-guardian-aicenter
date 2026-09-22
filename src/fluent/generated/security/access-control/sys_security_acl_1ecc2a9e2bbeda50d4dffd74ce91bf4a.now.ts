import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['1ecc2a9e2bbeda50d4dffd74ce91bf4a'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.lobby_admin'],
    table: 'x_aleen_snguardian_visitor_watch_list',
})
