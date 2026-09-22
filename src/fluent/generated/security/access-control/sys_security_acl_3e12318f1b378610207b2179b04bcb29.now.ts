import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['3e12318f1b378610207b2179b04bcb29'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_system_id_matching_rule',
})
