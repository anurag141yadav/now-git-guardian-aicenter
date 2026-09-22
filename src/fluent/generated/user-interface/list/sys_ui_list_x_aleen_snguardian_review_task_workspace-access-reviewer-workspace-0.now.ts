import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_review_task',
    view: 'workspace-access-reviewer-workspace-0',
    columns: ['number', 'assigned_to', 'total_records', 'completed', 'pending', 'status'],
})
