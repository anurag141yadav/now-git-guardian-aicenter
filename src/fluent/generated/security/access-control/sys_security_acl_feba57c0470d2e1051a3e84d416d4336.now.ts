import { Acl } from '@servicenow/sdk/core'

Acl({
    $id: Now.ID['feba57c0470d2e1051a3e84d416d4336'],
    description: 'Default access control on x_aleen_snguardian_asset_analytics_log',
    localOrExisting: 'Local',
    type: 'record',
    operation: 'delete',
    roles: ['x_aleen_snguardian.admin'],
    table: 'x_aleen_snguardian_asset_analytics_log',
})
