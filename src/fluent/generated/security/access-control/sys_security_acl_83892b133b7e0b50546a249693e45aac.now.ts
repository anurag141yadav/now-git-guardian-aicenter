import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['83892b133b7e0b50546a249693e45aac'],
    description: 'Default access control on x_aleen_snguardian_sooriacldemo',
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.badging_officer', 'x_aleen_snguardian.kiosk'],
    table: 'x_aleen_snguardian_sooriacldemo',
})
