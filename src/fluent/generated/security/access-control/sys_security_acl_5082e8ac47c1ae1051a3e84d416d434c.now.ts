import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['5082e8ac47c1ae1051a3e84d416d434c'],
    description: 'Default access control on x_aleen_snguardian_u_visitor_importset',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_u_visitor_importset',
})
