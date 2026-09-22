import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['be083c71472bf61051a3e84d416d43e7'],
    description: 'Default access control on x_aleen_snguardian_connector_credntial',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'create',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_connector_credntial',
})
