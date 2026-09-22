import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['0f892b133b7e0b50546a249693e45a89'],
    description: 'Default access control on x_aleen_snguardian_sooriacldemo',
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'create',
    roles: ['x_aleen_snguardian.badging_officer'],
    table: 'x_aleen_snguardian_sooriacldemo',
})
