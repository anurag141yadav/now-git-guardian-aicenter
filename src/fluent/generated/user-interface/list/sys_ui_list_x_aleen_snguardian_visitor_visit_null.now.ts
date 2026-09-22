import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_visitor_visit',
    view: default_view,
    columns: [
        'number',
        'visitor.full_name',
        'visitor.visitor_type.name',
        'visitor.visitor_status.name',
        'group',
        'host',
        'start_date',
        'end_date',
        'status.name',
    ],
})
