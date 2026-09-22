import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['43892b133b7e0b50546a249693e45ac5'],
    description: 'Default access control on x_aleen_snguardian_sooriacldemo',
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.badging_officer'],
    table: 'x_aleen_snguardian_sooriacldemo',
})
