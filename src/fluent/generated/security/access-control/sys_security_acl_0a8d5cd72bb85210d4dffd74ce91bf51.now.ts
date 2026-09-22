import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['0a8d5cd72bb85210d4dffd74ce91bf51'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.kiosk'],
    table: 'x_aleen_snguardian_visitor_visit',
})
