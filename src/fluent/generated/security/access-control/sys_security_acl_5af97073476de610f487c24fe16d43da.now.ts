import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['5af97073476de610f487c24fe16d43da'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_visitor_status',
})
