import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['bd12b54f1b378610207b2179b04bcbbe'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_badge_office',
})
