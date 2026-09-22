import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['9212fd4f1b378610207b2179b04bcb16'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'create',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_event',
})
