import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['d082e8ac47c1ae1051a3e84d416d4345'],
    description: 'Default access control on x_aleen_snguardian_u_visitor_importset',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_u_visitor_importset',
})
