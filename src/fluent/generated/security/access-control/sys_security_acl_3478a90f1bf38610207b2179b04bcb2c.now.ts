import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['3478a90f1bf38610207b2179b04bcb2c'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_access_level',
})
