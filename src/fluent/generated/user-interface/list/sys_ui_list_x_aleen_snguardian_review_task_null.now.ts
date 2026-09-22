import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_review_task',
    view: default_view,
    columns: ['number', 'assigned_to', 'total_records', 'completed', 'pending', 'status', 'sys_created_on'],
})
