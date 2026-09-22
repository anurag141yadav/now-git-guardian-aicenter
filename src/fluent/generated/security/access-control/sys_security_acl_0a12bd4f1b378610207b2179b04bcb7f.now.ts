import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['0a12bd4f1b378610207b2179b04bcb7f'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_reader_access_levels',
})
