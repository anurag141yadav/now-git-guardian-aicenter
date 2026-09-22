import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['6e12fd4f1b378610207b2179b04bcb78'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.access_reviewer'],
    table: 'x_aleen_snguardian_review_task',
})
