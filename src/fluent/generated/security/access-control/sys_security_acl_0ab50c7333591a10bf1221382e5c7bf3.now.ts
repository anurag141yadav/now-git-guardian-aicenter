import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['0ab50c7333591a10bf1221382e5c7bf3'],
    description: 'Default access control on x_aleen_snguardian_visitor_request',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.kiosk'],
    table: 'x_aleen_snguardian_visitor_request',
})
