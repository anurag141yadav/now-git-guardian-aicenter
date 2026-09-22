import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_identity_system',
    view: 'workspace-access-reviewer-workspace-0',
    columns: ['identifier', 'number', 'provisioning_status', 'provisioning_action', 'status', 'system'],
})
