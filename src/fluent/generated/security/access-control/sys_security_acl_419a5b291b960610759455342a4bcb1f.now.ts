import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['419a5b291b960610759455342a4bcb1f'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'create',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_events_refined',
})
