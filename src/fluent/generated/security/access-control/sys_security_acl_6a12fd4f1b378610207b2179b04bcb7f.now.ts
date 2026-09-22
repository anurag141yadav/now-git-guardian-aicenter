import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['6a12fd4f1b378610207b2179b04bcb7f'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_identity_system',
})
