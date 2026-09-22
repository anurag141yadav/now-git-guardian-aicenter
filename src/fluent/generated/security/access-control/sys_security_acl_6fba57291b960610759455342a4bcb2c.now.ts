import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['6fba57291b960610759455342a4bcb2c'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_events_refined',
})
