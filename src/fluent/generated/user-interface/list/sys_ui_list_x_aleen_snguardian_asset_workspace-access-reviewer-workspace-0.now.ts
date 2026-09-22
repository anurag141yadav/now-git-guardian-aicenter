import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_asset',
    view: 'workspace-access-reviewer-workspace-0',
    columns: ['number', 'serial', 'type', 'status', 'system'],
})
