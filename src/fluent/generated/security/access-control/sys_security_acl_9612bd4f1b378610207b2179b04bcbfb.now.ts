import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['9612bd4f1b378610207b2179b04bcbfb'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_system_function',
})
