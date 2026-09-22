import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['c082e8ac47c1ae1051a3e84d416d433c'],
    description: 'Default access control on x_aleen_snguardian_u_visitor_importset',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'create',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_u_visitor_importset',
})
