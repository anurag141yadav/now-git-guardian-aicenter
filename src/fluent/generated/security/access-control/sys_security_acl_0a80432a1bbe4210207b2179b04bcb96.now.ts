import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['0a80432a1bbe4210207b2179b04bcb96'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'report_view',
    roles: ['x_aleen_snguardian.employee'],
    table: 'x_aleen_snguardian_guardianboapprovalview',
})
