import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_identity_access',
    view: 'workspace-access-reviewer-workspace-0',
    columns: ['number', 'access_level', 'valid_from', 'valid_to', 'provisioning_action', 'provisioning_status'],
})
