import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['46b54c7333591a10bf1221382e5c7b06'],
    description: 'Default access control on x_aleen_snguardian_visitor_request',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_visitor_request',
})
