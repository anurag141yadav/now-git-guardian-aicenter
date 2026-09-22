import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['dc82e8ac47c1ae1051a3e84d416d4352'],
    description: 'Default access control on x_aleen_snguardian_u_visitor_importset',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_u_visitor_importset',
})
