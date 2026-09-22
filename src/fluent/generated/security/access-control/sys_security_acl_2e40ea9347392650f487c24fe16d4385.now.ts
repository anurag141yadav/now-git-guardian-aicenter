import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['2e40ea9347392650f487c24fe16d4385'],
    description: 'Query Range for  Applicable To - customized roles',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'query_range',
    roles: ['x_aleen_snguardian.visitor'],
    table: 'x_aleen_snguardian_request_entity_action',
    field: 'applicable_to',
})
