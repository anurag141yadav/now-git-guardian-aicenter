import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['028d5cd72bb85210d4dffd74ce91bf46'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'create',
    roles: ['x_aleen_snguardian.kiosk'],
    table: 'x_aleen_snguardian_visitor_visit',
})
