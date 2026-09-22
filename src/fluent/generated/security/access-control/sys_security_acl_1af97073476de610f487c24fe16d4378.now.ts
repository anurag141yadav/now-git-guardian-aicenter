import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['1af97073476de610f487c24fe16d4378'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_timezone',
})
