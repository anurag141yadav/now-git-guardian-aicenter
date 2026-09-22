import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['1f892b133b7e0b50546a249693e45af6'],
    description: 'Default access control on x_aleen_snguardian_sooriacldemo',
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_sooriacldemo',
})
