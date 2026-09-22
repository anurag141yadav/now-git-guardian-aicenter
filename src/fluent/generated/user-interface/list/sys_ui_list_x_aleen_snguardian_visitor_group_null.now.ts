import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_visitor_group',
    view: default_view,
    columns: ['name', 'code', 'is_deleted'],
})
