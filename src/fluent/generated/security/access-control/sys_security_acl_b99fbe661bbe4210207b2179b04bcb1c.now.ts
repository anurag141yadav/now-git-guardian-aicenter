import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['b99fbe661bbe4210207b2179b04bcb1c'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'report_view',
    roles: ['x_aleen_snguardian.employee'],
    table: 'x_aleen_snguardian_access_assignment_view',
})
