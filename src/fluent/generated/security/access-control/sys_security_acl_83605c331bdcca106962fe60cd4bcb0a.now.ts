import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['83605c331bdcca106962fe60cd4bcb0a'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'create',
    roles: ['x_aleen_snguardian.kiosk'],
    table: 'x_aleen_snguardian_system_features',
})
