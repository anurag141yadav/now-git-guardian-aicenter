import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['67fbd8572bb85210d4dffd74ce91bfb6'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_visitor',
})
