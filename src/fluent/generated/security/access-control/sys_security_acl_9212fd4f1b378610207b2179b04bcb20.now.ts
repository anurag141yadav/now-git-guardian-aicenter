import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['9212fd4f1b378610207b2179b04bcb20'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_asset',
})
