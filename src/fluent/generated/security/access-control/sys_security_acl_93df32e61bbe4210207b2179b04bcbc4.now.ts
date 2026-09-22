import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['93df32e61bbe4210207b2179b04bcbc4'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'report_view',
    roles: ['x_aleen_snguardian.employee'],
    table: 'x_aleen_snguardian_access_level_with_owners',
})
