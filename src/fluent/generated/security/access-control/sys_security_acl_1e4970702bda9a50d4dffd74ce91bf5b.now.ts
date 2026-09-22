import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['1e4970702bda9a50d4dffd74ce91bf5b'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'create',
    roles: ['x_aleen_snguardian.visitor'],
    table: 'x_aleen_snguardian_visitor_request',
})
