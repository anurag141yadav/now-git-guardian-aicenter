import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['5dfcee041ba84e106962fe60cd4bcbb5'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_request_entity_action',
})
