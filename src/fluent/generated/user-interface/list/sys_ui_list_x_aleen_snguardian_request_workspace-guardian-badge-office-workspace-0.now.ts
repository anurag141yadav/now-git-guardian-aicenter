import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_request',
    view: 'workspace-guardian-badge-office-workspace-0',
    columns: ['request_type', 'request_for', 'assigned_to', 'state', 'status'],
})
