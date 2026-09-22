import { List, default_view } from '@servicenow/sdk/core'

List({
    table: 'x_aleen_snguardian_review',
    view: default_view,
    columns: ['number', 'type', 'criteria', 'start_date', 'due_date', 'status'],
})
