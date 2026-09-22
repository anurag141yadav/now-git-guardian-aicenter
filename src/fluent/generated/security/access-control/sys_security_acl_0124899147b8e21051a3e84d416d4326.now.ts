import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['0124899147b8e21051a3e84d416d4326'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_badge_template',
})
