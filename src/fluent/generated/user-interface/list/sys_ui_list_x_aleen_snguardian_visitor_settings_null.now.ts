import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_visitor_settings',
    view: default_view,
    columns: ['name', 'default_value'],
})
