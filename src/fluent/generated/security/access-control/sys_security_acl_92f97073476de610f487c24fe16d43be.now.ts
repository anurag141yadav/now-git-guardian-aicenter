import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['92f97073476de610f487c24fe16d43be'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'create',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_risk',
})
