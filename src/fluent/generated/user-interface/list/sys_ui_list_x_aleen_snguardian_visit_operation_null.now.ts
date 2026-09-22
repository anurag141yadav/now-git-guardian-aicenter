import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_visit_operation',
    view: default_view,
    columns: ['number', 'comments', 'end_date', 'operation', 'start_date', 'visit'],
})
