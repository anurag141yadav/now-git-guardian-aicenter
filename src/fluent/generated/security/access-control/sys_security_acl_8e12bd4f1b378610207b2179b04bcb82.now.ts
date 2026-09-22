import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['8e12bd4f1b378610207b2179b04bcb82'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_reader_access_levels',
})
