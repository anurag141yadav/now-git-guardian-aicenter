import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['1bc1e55233b99e10bf1221382e5c7bbf'],
    description: 'Default access control on x_aleen_snguardian_visitor_notification',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'create',
    roles: ['x_aleen_snguardian.kiosk'],
    table: 'x_aleen_snguardian_visitor_notification',
})
