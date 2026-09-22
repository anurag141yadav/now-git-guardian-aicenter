import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['8669272b1b054210759455342a4bcb14'],
    description: 'Default access control on x_aleen_snguardian_u_location_import_set',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_u_location_import_set',
})
