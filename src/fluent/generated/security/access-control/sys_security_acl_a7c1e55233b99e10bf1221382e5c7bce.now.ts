import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['a7c1e55233b99e10bf1221382e5c7bce'],
    description: 'Default access control on x_aleen_snguardian_visitor_notification',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.kiosk'],
    table: 'x_aleen_snguardian_visitor_notification',
})
