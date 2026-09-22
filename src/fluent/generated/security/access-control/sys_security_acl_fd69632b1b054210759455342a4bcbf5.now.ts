import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['fd69632b1b054210759455342a4bcbf5'],
    description: 'Default access control on x_aleen_snguardian_u_location_import_set',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'create',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_u_location_import_set',
})
