import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_visitor_visit_type',
    view: default_view,
    columns: ['code', 'name'],
})
