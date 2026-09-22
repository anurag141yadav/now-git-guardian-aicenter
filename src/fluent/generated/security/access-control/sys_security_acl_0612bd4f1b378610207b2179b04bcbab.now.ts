import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['0612bd4f1b378610207b2179b04bcbab'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_access_owner',
})
