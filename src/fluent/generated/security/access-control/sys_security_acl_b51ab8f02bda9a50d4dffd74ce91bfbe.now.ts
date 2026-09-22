import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['b51ab8f02bda9a50d4dffd74ce91bfbe'],
    description: 'Default access control on x_aleen_snguardian_visitor_notification',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.visitor'],
    table: 'x_aleen_snguardian_visitor_notification',
})
