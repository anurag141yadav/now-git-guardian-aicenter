import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['3a12318f1b378610207b2179b04bcb3a'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_identity_access',
})
