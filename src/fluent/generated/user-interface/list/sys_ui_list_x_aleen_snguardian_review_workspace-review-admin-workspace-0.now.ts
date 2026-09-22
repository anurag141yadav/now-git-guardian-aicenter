import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_review',
    view: 'workspace-review-admin-workspace-0',
    columns: ['number', 'type', 'criteria', 'start_date', 'due_date', 'status'],
})
