import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['21ca04201bb8ce506962fe60cd4bcbb0'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'create',
    roles: ['x_aleen_snguardian.lobby_admin', 'x_aleen_snguardian.host'],
    table: 'x_aleen_snguardian_request_activity',
})
