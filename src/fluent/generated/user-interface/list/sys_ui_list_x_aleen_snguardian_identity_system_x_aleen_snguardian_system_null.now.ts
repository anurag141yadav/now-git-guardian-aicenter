import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_identity_system',
    view: default_view,
    parent: 'x_aleen_snguardian_system',
    columns: ['identifier', 'number', 'provisioning_status', 'provisioning_action', 'status', 'system'],
})
