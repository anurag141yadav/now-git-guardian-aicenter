import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['6e12fd4f1b378610207b2179b04bcbb6'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_assertion',
})
