import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['07087c71472bf61051a3e84d416d432a'],
    description: 'Default access control on x_aleen_snguardian_connector_credntial',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_connector_credntial',
})
