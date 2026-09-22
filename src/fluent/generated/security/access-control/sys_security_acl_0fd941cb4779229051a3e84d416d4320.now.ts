import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['0fd941cb4779229051a3e84d416d4320'],
    description: 'Worknotes required accesss for guardian User',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'create',
    roles: ['x_aleen_snguardian.visitor'],
    table: 'x_aleen_snguardian_visitor_request',
    field: 'work_notes',
})
