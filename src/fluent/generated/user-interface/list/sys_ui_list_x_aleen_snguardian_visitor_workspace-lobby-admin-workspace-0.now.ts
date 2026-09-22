import { List } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_visitor',
    view: 'workspace-lobby-admin-workspace-0',
    columns: ['first_name', 'last_name', 'email', 'phone', 'visitor_type', 'visitor_status'],
})
