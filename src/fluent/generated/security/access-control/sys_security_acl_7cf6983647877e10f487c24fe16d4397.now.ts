import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['7cf6983647877e10f487c24fe16d4397'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'query_range',
    roles: ['x_aleen_snguardian.access_reviewer'],
    table: 'x_aleen_snguardian_review_task',
    field: 'delegated_to',
})
