import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['0612bd4f1b378610207b2179b04bcb90'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_reader',
})
