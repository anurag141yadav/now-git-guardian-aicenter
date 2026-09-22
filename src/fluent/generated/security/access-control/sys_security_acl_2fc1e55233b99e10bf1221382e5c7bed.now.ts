import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['2fc1e55233b99e10bf1221382e5c7bed'],
    description: 'Default access control on x_aleen_snguardian_visitor_notification',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_visitor_notification',
})
