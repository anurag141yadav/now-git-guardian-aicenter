import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['bbaf05c01bac8a10759455342a4bcb0a'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_status_code',
})
