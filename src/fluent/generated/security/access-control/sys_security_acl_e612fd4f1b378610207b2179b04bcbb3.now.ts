import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['e612fd4f1b378610207b2179b04bcbb3'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_assertion',
})
