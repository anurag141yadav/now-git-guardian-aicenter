import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['b31aeb533b7e0b50546a249693e45af3'],
    localOrExisting: 'Existing',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.visitor'],
    table: 'x_aleen_snguardian_sooriacldemo',
})
