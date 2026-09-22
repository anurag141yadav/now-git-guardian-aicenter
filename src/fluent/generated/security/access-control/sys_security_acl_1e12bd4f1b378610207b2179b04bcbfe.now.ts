import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['1e12bd4f1b378610207b2179b04bcbfe'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_system_function',
})
