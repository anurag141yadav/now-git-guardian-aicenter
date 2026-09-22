import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['0cdefe661bbe4210207b2179b04bcbb4'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'report_view',
    roles: ['x_aleen_snguardian.employee'],
    table: 'x_aleen_snguardian_accesslevelwithlocationview',
})
