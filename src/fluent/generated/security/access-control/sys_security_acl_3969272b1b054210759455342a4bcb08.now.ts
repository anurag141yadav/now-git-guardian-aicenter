import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['3969272b1b054210759455342a4bcb08'],
    description: 'Default access control on x_aleen_snguardian_u_location_import_set',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_u_location_import_set',
})
