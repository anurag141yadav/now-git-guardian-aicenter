import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['32ba57c0470d2e1051a3e84d416d4324'],
    description: 'Default access control on x_aleen_snguardian_asset_analytics_log',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'write',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_asset_analytics_log',
})
