import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['c669272b1b054210759455342a4bcb0e'],
    description: 'Default access control on x_aleen_snguardian_u_location_import_set',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_u_location_import_set',
})
