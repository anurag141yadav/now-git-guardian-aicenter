import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['95200be61bbe4210207b2179b04bcb5f'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'report_view',
    roles: ['x_aleen_snguardian.employee'],
    table: 'x_aleen_snguardian_cardholders_without_access_view',
})
