import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['089d4af41b7842106962fe60cd4bcb40'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_location',
})
