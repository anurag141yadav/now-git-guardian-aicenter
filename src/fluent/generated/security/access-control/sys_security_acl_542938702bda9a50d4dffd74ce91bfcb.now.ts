import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['542938702bda9a50d4dffd74ce91bfcb'],
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_visit_operation',
})
