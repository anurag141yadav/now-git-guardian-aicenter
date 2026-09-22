import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['cf087c71472bf61051a3e84d416d431d'],
    description: 'Default access control on x_aleen_snguardian_connector_credntial',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_connector_credntial',
})
