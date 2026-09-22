import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_visitor',
    view: default_view,
    columns: ['first_name', 'last_name', 'email', 'phone', 'visitor_status.name', 'visitor_type.name'],
})
