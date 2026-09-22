import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['ca88854b4779229051a3e84d416d4317'],
    description: 'Worknotes ACL',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.host', 'x_aleen_snguardian.lobby_admin'],
    table: 'x_aleen_snguardian_request',
    field: 'work_notes',
})
