import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_visitor_visit',
    view: 'workspace-lobby-admin-workspace-0',
    columns: ['number', 'start_date', 'end_date', 'status', 'visitor'],
})
