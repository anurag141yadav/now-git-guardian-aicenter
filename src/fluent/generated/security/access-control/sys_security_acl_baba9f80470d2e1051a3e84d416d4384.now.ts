import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['baba9f80470d2e1051a3e84d416d4384'],
    description: 'Default access control on x_aleen_snguardian_asset_analytics_log',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'create',
    roles: ['x_aleen_snguardian.manager'],
    table: 'x_aleen_snguardian_asset_analytics_log',
})
