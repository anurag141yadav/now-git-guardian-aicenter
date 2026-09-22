import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_visitor_status',
    view: default_view,
    columns: ['code', 'name'],
})
