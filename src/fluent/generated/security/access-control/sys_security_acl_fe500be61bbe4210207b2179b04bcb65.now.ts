import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['fe500be61bbe4210207b2179b04bcb65'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'report_view',
    roles: ['x_aleen_snguardian.employee'],
    table: 'x_aleen_snguardian_cardholders_without_badges_view',
})
