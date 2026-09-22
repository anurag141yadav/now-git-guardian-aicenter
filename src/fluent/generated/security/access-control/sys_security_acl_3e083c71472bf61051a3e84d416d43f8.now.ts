import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['3e083c71472bf61051a3e84d416d43f8'],
    description: 'Default access control on x_aleen_snguardian_connector_credntial',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'read',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_connector_credntial',
})
